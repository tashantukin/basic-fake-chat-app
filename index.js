var leadSelf='Me: ',
leadComputer = 'PC: ',
aSaid =["This is a cyber chat!"],
msgYes = "yes, that's a great idea.",
msgNo = "No, that must be a mistake",
aSassyStuff = ["Like mold ob books, grow myths and history",
            "She moved like a poem and smiled like a sphinx",
            "As long as we dont die, this is gonna be one hell of a story",
            "She laughed, and the desert sang",
            "You've got about a charm as much as a dead slug"]

function talk(msg) {
    echo(leadSelf +  msg)
}

function replyYesNo(){
    var msg =  Math.random() > .5 ? msgYes : msgNo
    echo (leadComputer + msg)
}

function saySassyStuff(){

    var msg =  aSassyStuff[Math.floor(Math.random() * aSassyStuff.length)];

    echo (leadComputer + msg)
}



function echo(msg) {

    aSaid.push(`<div> ${msg} </div>`)

    var  aSaidLength = aSaid.length,
         start = Math.max(aSaidLength - 6,0),
         out = "";

    for(var i=start; i<aSaidLength; i++) {
        out += aSaid[i];
    }

    $('.advert').html(out);


    $('#talk span').text(msg)
}