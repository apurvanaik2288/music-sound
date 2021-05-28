const circle = document.querySelector('.circle');
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const sound = document.querySelector('.sound');

circle.addEventListener('click', function(e){
    console.log(e);
    if (e.target === play)
    {
        play.style.display = 'none';
        pause.classList.remove('pause');
       sound.play();
     
    }
    else if(e.target === pause)
    {   
       
        pause.classList.add('pause');
        play.style.display = '';
        sound.pause();
        
      
    }

});