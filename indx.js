const fight = document.getElementById('fight')

const chapters = document.getElementById('chapters')

const closelevelpage = document.getElementById('close-level-page')

fight.addEventListener('click', function handleClick() {
    if (chapters.style.display === 'flex') {
        chapters.style.display = 'none';
    }
    else{
        chapters.style.display ='flex';
    }

});

closelevelpage.addEventListener('click' ,function handleClick(){

    chapters.style.display = 'none';

});


