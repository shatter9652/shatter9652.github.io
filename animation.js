// SCRIPT SKIDDED FROM FROGGIE!!!

// errr
const textElement = document.getElementById("text");
const overlay = document.getElementById("overlay");
const audio = document.getElementById("audio-player");

// lyrics timing and stuff
const phrases = [
//1    
    "",
//2    
    "IT STARTED ONCE UPON A TIME",
//3    
    "A LEGEND SPOKE IN SHADOWD RHYME",
//4
    "OF LIGHT AND DARK AND LOVE AND HATE",
//5
    "THE HOPES AND DREAMS THAT GOVERN FATE",
//6
    "THIS WAS THE LEGEND OF",
//7
    "<DELTARUNE.>",
//8    
    "A WORLD BASKED IN PUREST LIGHT.",
//9    
    "BENEATH IT, GREW ETERNAL NIGHT.",
//10
    "THE FOUNTAINS FREED,",
//11    
    "THE ROARING CRIES.",
//12    
    "THE TITANS SHAPE",
//13    
    "FROM DARKENED EYES.",
//14    
    "THE LIGHT AND DARK,",
//15    
    "BOTH BURNING DIRE.",
//16    
    "A COUNTDOWN TO",
//17    
    "THE EARTH'S EXPIRE.",
//18    
    "BUT LO, ON HOPES AND DREAMS THEY SEND.",
//19    
    "THREE HEROES AT THE WORLD'S END.",
//20    
    "THE GIRL,",
//21    
    "WITH HOPE CROSSED ON HER HEART.",
//22    
    "THE PRINCE,",
//23    
    "ALONE IN DEEPEST DARK.",
//24    
    "THE CAGE,",
//25    
    "WITH HUMAN SOUL AND PARTS!",
//26    
    "THEY'LL HEAR THE RING OF HEAVEN'S CALL.",
//27    
    "THEY'LL SEE THE TAIL OF HELL TAKE CRAWL.",
//28    
    "THE KNIGHT WHICH MAKES",
//29    
    "WITH BLACKENED KNIFE.",
//30    
    "SHALL DUEL WITH HEROES",
//31    
    "STRIFE BY STRIFE.",
//32    
    "THE QUEEN'S CHARIOT",
//33    
    "CANNOT BE STOPPED.",
//34    
    "THE LORD OF SCREENS",
//35    
    "CLEAVED RED BY BLADE.",
//36    
    "THE FLOWER MAN,",
//37    
    "TRAPPED IN ASYLUM.",
//38    
    "THE ANGEL, BANISHED, WILL",
//39    
    "FINALLY MEET WITH ITS DESIRE.",
//40    
    "AND THEN. WHEN ALL HOPE",
//41    
    "IS LOST FOR THE TALE",
//
    "THE KNIGHT WHICH MAKES",
];

// these are in seconds btw
const delays = [3.35, 3.35, 3.35, 3.35, 0.45, 0.65, 0.67, 0.55, 0.55, 0.55, 0.55, 0.56, 0.45, 0.45, 0.45, 0.45, 0.65, 0.65, 0.60, 0.65, 0.35, 1.65];

overlay.addEventListener("click", () => {
    textElement.textContent = "";
    audio.play();
});

// main animation fade in
audio.addEventListener("play", () => {
    let i = 0;
    overlay.style.opacity = "1";
    
    function updateText() {
        if (i < phrases.length) {
            textElement.textContent = phrases[i];
            setTimeout(updateText, delays[i] * 1000);
            i++;
        } else {
            setTimeout(() => {
                overlay.style.transition = "opacity 1s ease";
                overlay.style.opacity = "0";
                setTimeout(() => {
                    overlay.style.display = 'none';
                }, 1000);
            }, 300);
        }
    }
    updateText();
});
