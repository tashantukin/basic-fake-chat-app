
var o = {
    leadSelf:'Me: ',
    leadComputer:'PC: ',
    aSaid:["This is a cyber chat!"],
    msgYes:"yes, that's a great idea.",
    msgNo:"No, that must be a mistake",
    aSassyStuff: ["Like mold ob books, grow myths and history",
                "She moved like a poem and smiled like a sphinx",
                "As long as we dont die, this is gonna be one hell of a story",
                "She laughed, and the desert sang",
                "You've got about a charm as much as a dead slug"],

     talk: function(msg) {
            this.echo(this.leadSelf +  msg)
     },

    replyYesNo: function(){
          var msg =  Math.random() > .5 ? this.msgYes : this.msgNo
          echo (this.leadComputer + msg)
    },

    saySassyStuff: function(){
        var msg =  this.aSassyStuff[Math.floor(Math.random() * this.aSassyStuff.length)];

        echo (this.leadComputer + msg)
    },

    echo: function(msg){
        this.aSaid.push(`<div> ${msg} </div>`)

        var  aSaidLength = this.aSaid.length,
            start = Math.max(aSaidLength - 6,0),
            out = "";

        for(var i=start; i<aSaidLength; i++) {
            out += this.aSaid[i];
        }

        $('.advert').html(out);


        $('#talk span').text(msg)
    }



}


