// reconhecer as teclas digitadas
//toLowerCase deixa todas as teclas em minusculo
document.body.addEventListener('keyup', (event)=>{
    playSound ( event.code.toLowerCase() );

});

document.querySelector('.composer button').addEventListener(`click`, ()=>{
    let song = document.querySelector(`#input`).value;

    if(song !== ''){
        let songArray = song.split('');
        playComposition(songArray);
    }
});

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)
    if(audioElement){
        audioElement.currentTime = 0;
        audioElement.play();
    } 

    if (keyElement){
        keyElement.classList.add('active'); //adiciona a class
        setTimeout(()=>{
            keyElement.classList.remove('active'); //remove a class após 300ms
        }, 300);
    }
}

function playComposition(songArray){
    let wait = 0;

    for (let songItem of songArray){
        setTimeout(()=>{
            playSound(`key${songItem}`);
        }, wait)

        
        wait += 250;

        
    }
}