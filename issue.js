"use strict";

//to find the issue using lessons from chapter 3
let issue = 0;
//Do-while to find out the issue
do{
    issue = parseInt(
        prompt("What appears to be the issue? 1 = Delivery, 2 = Dungeon, 3 = Primal"));
    }
while(issue < 1 || issue > 3)

if (issue == 1) {
    document.write(`<h1>Delivery</h1><p>I've delivered all over Eorzea to the edge of the universe so there's no where I can't deliver!</p><p>This will be at minimum 100 Gil and vary based on how far I must adventure.</p>`)
}

else if (issue == 2) {
    document.write(`<h1>Dungeons</h1><p>Cultist caves, royal castles, abandoned mines, and everything in between! Tell me where you need me and I'll be there to clear it out!</p><p>This will be at minimum 1,000 Gil and vary based on how intense the dungeon is.</p>`)
}

else if (issue == 3) {
    document.write(`<h1>Primals</h1><p>Ticked off the locals enough they wish to call down their gods to smite their enemies? Don't worry I'll bring them low.... but learn to get along better with the locals.</p><p>This will be at minimum 5,000 Gil and vary based on the threat level.</p>`)
}