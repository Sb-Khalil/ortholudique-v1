/********************************************************************/
// VARIABLES FOR THE GAME 2 SECTION

var squares2 = document.querySelectorAll(".gallery-game-two-container");
var g2Array = [
    {
        g2img: "<img src=\"assets/img/Game2/0.png\" class=\"gallery-game-two-img\">",
        g2sound: "<audio src=\"assets/audio/animal sounds/0.mp3\" controls></audio>"
    },
    {
        g2img: "<img src=\"assets/img/Game2/1.png\" class=\"gallery-game-two-img\">",
        g2sound: "<audio src=\"assets/audio/animal sounds/1.mp3\" controls></audio>"
    },
    {
        g2img: "<img src=\"assets/img/Game2/2.png\" class=\"gallery-game-two-img\">",
        g2sound: "<audio src=\"assets/audio/animal sounds/2.mp3\" controls></audio>"
    },
    {
        g2img: "<img src=\"assets/img/Game2/3.png\" class=\"gallery-game-two-img\">",
        g2sound: "<audio src=\"assets/audio/animal sounds/3.mp3\" controls></audio>"
    },
    {
        g2img: "<img src=\"assets/img/Game2/4.png\" class=\"gallery-game-two-img\">",
        g2sound: "<audio src=\"assets/audio/animal sounds/4.mp3\" controls></audio>"
    },
    {
        g2img: "<img src=\"assets/img/Game2/5.png\" class=\"gallery-game-two-img\">",
        g2sound: "<audio src=\"assets/audio/animal sounds/5.mp3\" controls></audio>"
    },
    {
        g2img: "<img src=\"assets/img/Game2/6.png\" class=\"gallery-game-two-img\">",
        g2sound: "<audio src=\"assets/audio/animal sounds/6.mp3\" controls></audio>"
    },
    {
        g2img: "<img src=\"assets/img/Game2/7.png\" class=\"gallery-game-two-img\">",
        g2sound: "<audio src=\"assets/audio/animal sounds/7.mp3\" controls></audio>"
    },
    {
        g2img: "<img src=\"assets/img/Game2/8.png\" class=\"gallery-game-two-img\">",
        g2sound: "<audio src=\"assets/audio/animal sounds/8.mp3\" controls></audio>"
    },
    {
        g2img: "<img src=\"assets/img/Game2/9.png\" class=\"gallery-game-two-img\">",
        g2sound: "<audio src=\"assets/audio/animal sounds/9.mp3\" controls></audio>"
    },
    {
        g2img: "<img src=\"assets/img/Game2/10.png\" class=\"gallery-game-two-img\">",
        g2sound: "<audio src=\"assets/audio/animal sounds/10.mp3\" controls></audio>"
    },
    {
        g2img: "<img src=\"assets/img/Game2/11.png\" class=\"gallery-game-two-img\">",
        g2sound: "<audio src=\"assets/audio/animal sounds/11.mp3\" controls></audio>"
    },
    {
        g2img: "<img src=\"assets/img/Game2/12.png\" class=\"gallery-game-two-img\">",
        g2sound: "<audio src=\"assets/audio/vehicle sounds/12.mp3\" controls></audio>"
    },
    {
        g2img: "<img src=\"assets/img/Game2/13.png\" class=\"gallery-game-two-img\">",
        g2sound: "<audio src=\"assets/audio/vehicle sounds/13.mp3\" controls></audio>"
    },
    {
        g2img: "<img src=\"assets/img/Game2/14.png\" class=\"gallery-game-two-img\">",
        g2sound: "<audio src=\"assets/audio/vehicle sounds/14.mp3\" controls></audio>"
    },
    {
        g2img: "<img src=\"assets/img/Game2/15.png\" class=\"gallery-game-two-img\">",
        g2sound: "<audio src=\"assets/audio/vehicle sounds/15.mp3\" controls></audio>"
    },
    {
        g2img: "<img src=\"assets/img/Game2/16.png\" class=\"gallery-game-two-img\">",
        g2sound: "<audio src=\"assets/audio/vehicle sounds/16.mp3\" controls></audio>"
    },
    {
        g2img: "<img src=\"assets/img/Game2/17.png\" class=\"gallery-game-two-img\">",
        g2sound: "<audio src=\"assets/audio/vehicle sounds/17.mp3\" controls></audio>"
    },
    {
        g2img: "<img src=\"assets/img/Game2/18.png\" class=\"gallery-game-two-img\">",
        g2sound: "<audio src=\"assets/audio/vehicle sounds/18.mp3\" controls></audio>"
    },
    {
        g2img: "<img src=\"assets/img/Game2/19.png\" class=\"gallery-game-two-img\">",
        g2sound: "<audio src=\"assets/audio/vehicle sounds/19.mp3\" controls></audio>"
    },
];
var numSound = 6;
var sounds = generateRandomSounds(numSound);
var pickedSound = pickSound();
var goalSound = document.querySelector(".goal-sound");
var resetBtn2 = document.querySelector("#reset-two");
var easyBtn2 = document.querySelector("#easy-two");
var hardBtn2 = document.querySelector("#hard-two");
var gameAudio = document.querySelector(".goal-sound");

/********************************************************************/
// GAME 2

// RESET BUTTON GAME 2

resetBtn2.addEventListener("click", function() {
    sounds = generateRandomSounds(numSound);
    pickedSound = pickSound();
    goalSound.innerHTML = "<img src=\"assets/img/Game2/sound.png\" alt=\"\" class=\"gallery-game-two-img\"></img>" + pickedSound.g2sound;
    // goalSound = pickedSound;
    goalSoundAudio = gameAudio.lastChild;
    for (var i = 0; i < squares2.length; i++) {
        if (sounds[i]) {
            squares2[i+1].style.cssText = "display : block;";
            squares2[i+1].innerHTML = sounds[i].g2img;
        }else {
            squares2[i+1].style.cssText = "display : none;";
        }
    }
});

/********************************************************************/
// EZ BUTTON GAME 2

easyBtn2.addEventListener("click", function() {
    numSound = 3;
    easyBtn2.classList.add("selected-btn-two");
    hardBtn2.classList.remove("selected-btn-two");
    sounds = generateRandomSounds(numSound);
    pickedSound = pickSound();
    goalSound.innerHTML = "<img src=\"assets/img/Game2/sound.png\" alt=\"\" class=\"gallery-game-two-img\"></img>" + pickedSound.g2sound;
    // goalSound = pickedSound;
    goalSoundAudio = gameAudio.lastChild;
    for (var i = 0; i < squares2.length; i++) {
        if (sounds[i]) {
            squares2[i+1].style.cssText = "display : block;";
            squares2[i+1].innerHTML = sounds[i].g2img;
        }else {
            squares2[i+1].style.cssText = "display : none;";
        }
    }
});

/********************************************************************/
// HARD BUTTON GAME 2

hardBtn2.addEventListener("click", function() {
    numSound = 6;
    hardBtn2.classList.add("selected-btn-two");
    easyBtn2.classList.remove("selected-btn-two");
    sounds = generateRandomSounds(numSound);
    pickedSound = pickSound();
    goalSound.innerHTML = "<img src=\"assets/img/Game2/sound.png\" alt=\"\" class=\"gallery-game-two-img\"></img>" + pickedSound.g2sound;
    // goalSound = pickedSound;
    goalSoundAudio = gameAudio.lastChild;
    for (var i = 0; i < squares2.length; i++) {
        squares2[i+1].style.cssText = "display : block;";
        squares2[i+1].innerHTML = sounds[i].g2img;
    }
});



/********************************************************************/
// INIT GAME 2

goalSound.innerHTML = "<img src=\"assets/img/Game2/sound.png\" alt=\"\" class=\"gallery-game-two-img\"></img>" + pickedSound.g2sound;
// goalSound = pickedSound;
var goalSoundAudio = gameAudio.lastChild;
gameAudio.addEventListener("click", function() {
    if (goalSoundAudio.paused) {
        goalSoundAudio.play();
    }else {
        goalSoundAudio.pause();
    } 
});
for (var j = 0; j < squares2.length; j++) {
    squares2[j+1].innerHTML = sounds[j].g2img;
    squares2[j+1].addEventListener("click", function(){
        var clickedImg = this.innerHTML;
        console.log(clickedImg , pickedSound.g2img);
        if (clickedImg === pickedSound.g2img) {
            // alert("correct");
            winPopUp.classList.add("active-popup");
            conf.classList.add("active-confetti");
            changeImages2(clickedImg);
        }else {
            this.style.cssText = "display : none;";
        };
    });
};


/********************************************************************/
// GAME 2 


/********************************************************************/
// GAME 2 FUNCTIONS

/********************************************************************/
// CHANGE ALL THE IMAGES TO THE GOAL IMAGE WHEN THE GUESS IS CORRECT 

function changeImages2(image) {
    for (var i = 0; i < squares2.length; i++) {
        squares2[i + 1].style.cssText = "display : block;";
        squares2[i + 1].innerHTML = pickedSound.g2img;
    }
}


/********************************************************************/
// DEFINE THE GOAL SOUND RANDOMLY 

function pickSound() {
    var random = Math.floor(Math.random() * sounds.length);
    return sounds[random];
    // console.log(sounds[random]);
}

/********************************************************************/
// GENERATE AN ARRAY OF IMAGES AND SOUNDS RANDOMLY 

function generateRandomSounds(num){
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomSound());
    }
    // console.log(arr);
    return arr;
}

function randomSound() {
    var img = Math.floor(Math.random() * g2Array.length);
    // console.log(g2Array[img]);
    return g2Array[img];
}