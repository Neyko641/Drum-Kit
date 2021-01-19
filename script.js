const takeInput = e => ({
    'a': 65,
    's': 83, 
    'd': 68, 
    'f': 70, 
    'g': 71, 
    'h': 72, 
    'j': 74, 
    'k': 75, 
    'l': 76,
}[e.key]); 

function playSound(e) {
    const key = takeInput(e);
    if(!key) {
        return;
    }
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    const keySelector = document.querySelector(`.key[data-key="${key}"]`);
    if (!audio) return; 
    audio.currentTime = 0; //rewind
    audio.play();
    keySelector.classList.add('playing');
}


(function () {
    window.addEventListener('keydown', playSound);
    window.addEventListener('keyup', function(e) {
        const key = takeInput(e);
        if (!key) {
            return;
        } 
        const keySelector = document.querySelector(`.key[data-key="${key}"]`);
        keySelector.classList.remove('playing');
    });
})();




