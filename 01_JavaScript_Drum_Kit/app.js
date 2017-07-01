(function() {
    /* on key down, transition added and audio played */
    const playSound = function(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

        if (!audio) return; // stop if no mapped audio for key
        audio.currentTime = 0; // rewind to the start
        audio.play(); // if play if in progress, will not play again unless you rewind
        key.classList.add('playing'); // add class that has style for transition
        //console.log(key);
    };

    /* remove the playing class */
    let removeTransition = function(e) {
        /* we want only the transform property, not the box-shadow, border-color,... */
        if (e.propertyName !== "transform") return;
        //console.log(this);
        this.classList.remove('playing');

    };


    /* listen for transition end */
    const keys = document.querySelectorAll('.key');
    keys.forEach((key) => {
        key.addEventListener('transitionend', removeTransition)
    });
    window.addEventListener('keydown', playSound);

})();

/* Notes:
document.querySelector() - returns the first element within document that
matches the specified selector or group of selectors

document.querySelectorAll() - returns a list of elements using depth-first
pre-order traveral of document's nodes

key.classList.add('playing');
key.classList.remove('playing');
key.classList.toggle('playing');
*/
