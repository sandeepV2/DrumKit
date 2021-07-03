AddLister();

function w(){
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
}

function a(){
    var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
}

function s(){
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
}

function d(){
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
}

function j(){
    var audio = new Audio('sounds/tom-2.mp3');
    audio.play();
}

function k(){
    var audio = new Audio('sounds/tom-3.mp3');
    audio.play();
}

function l(){
    var audio = new Audio('sounds/tom-4.mp3');
    audio.play();
}


function AddLister(){
    var drum_b = document.getElementsByTagName("button");
    var drum_n = "w";
    for (var i=0; i < drum_b.length ; i++){
        //drum_n = drum_b[i];
        drum_b[i].addEventListener("click", function ()  {
            this.style.color = "white";
            // Calling function based on the name.
            // You can use switch case to do the same.
            eval(this.innerHTML)();
            this.style.color = "red";
            putAnimation(this.innerHTML);
        });
        //drum_b[i].drum = drum_b[i].innerText;
        // Named function did not work here ??
        // arrow function also did not work. !!
    }
}


function playAudio(drum_t){
    // ToDo check how to use named funciton for
    // event handlers.
    console.log(drum_t.key);
}

// Adding keyboard listeners.
document.addEventListener('keydown', function(event){
    var nodes = ['w', 'a', 's', 'd', 'j', 'k', 'l'];
    if ( nodes.includes(event.key)){
        eval(event.key)();
        putAnimation(event.key);
    } else {
        console.log(event.key);
    }
}); 


function putAnimation(key){
    var active_k = document.querySelector("."+key);
    active_k.classList.add("pressed");

    setTimeout(function(){
        active_k.classList.remove("pressed");
    }, 100);
}
