(function(){
    'use strict';
    console.log('reading js');

    const hotspots = document.querySelectorAll('#scene2, #scene3, #scene4');
    const theImg = document.querySelector('#scene1 .backgroundImg');
    const open = document.querySelector('#scene4');

    console.log(hotspots);

    hotspots.forEach(function(eachSpot){
        eachSpot.addEventListener('mouseover', zoomPhoto);
        eachSpot.addEventListener('mouseout', function(){
            theImg.className='backgroundImg';
        });

        eachSpot.addEventListener('click', function(event){
            if(event.target.id === 'scene4'){
                open.remove.className='hideme';
                open.style.zIndex='3';
            }
        });
    });

    function zoomPhoto(event){
        const thisCorner = event.target.id;
        console.log(thisCorner);
        switch(thisCorner){
            case 'scene4': theImg.className='scene4'; break;
            case 'scene2': theImg.className='scene2'; break;
            case 'scene3': theImg.className='scene3'; break;
        }
    }

    //plan: incorporate z-index and .hideme into the zoom
})();