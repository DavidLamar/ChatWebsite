var un = prompt("What is your username?");
var lastMessage = "";
var myColor = "4D4C6B";

while(un === ""){
    un = prompt("What is your username? (It can't be blank...)");
}

var addMessage = function(username, message, color){
    if(message === ''){return;}
    if(lastMessage != username){
        $('.messages').append('<div class=\"sentMessage\" style=\"background-color: #C9C9C9\"> <hr> </div>');
    }
    $('.messages').append('<div class=\"sentMessage\" style=\"background-color: #' + color + '\">' + username + ": " + message + '</div>');
    lastMessage = username;
}

var addOnline = function(username, color){

    $('.onlineNow').append('<div class=\"user\" style=\"color: #' + color + '\">' + username + '</div>');
}

var updateStatus = function(status){
    $('.status').html(status);
}

var blankStatus = function(){
    $('.status').html("<br></br>");
}


$(document).ready(
    function(){

    addOnline(un, myColor);
    addOnline("TestPerson", "FF0000");
    addOnline("TestPerson2", "FFEA00");
    blankStatus();

        $('#button').click(
            function(){
                addMessage(un, $('textarea[name=message]').val());
                $('textarea[name=message]').val("");
            }
        );

        $('.user').click(
            function(){
                $('textarea[name=message]').val( '(Message ' + $(this).html() + '):' );

                //TEMPORARY!! DELETE THIS LATER (Changes your user when you click on someone)
                un = $(this).html();
            }
        );


        $(document).keypress(
            function(e){
                if(e.which == 13){
                    $('textarea[name=message]').attr("dissabled", true);
                    addMessage(un, $('textarea[name=message]').val(), myColor);
                    $('textarea[name=message]').val("");
                } else {
                    updateStatus(un + " is typing a message... <br></br>");
                }
            }
        );

        $(document).keyup(
            function(e){
                if(e.which == 13){
                    $('textarea[name=message]').attr("dissabled", false);
                    $('textarea[name=message]').val("");
                } else {
                    blankStatus();
                }
            }
        );



    }
);




