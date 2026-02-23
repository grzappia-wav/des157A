(function(){
    'use strict';
    console.log('reading js');

    const hotspots = document.querySelectorAll('#center, #left, #right');
    const theImg = document.querySelector('#scene1 .backgroundImg');

    console.log(hotspots);

    hotspots.forEach(function(eachSpot){
        eachSpot.addEventListener('mouseover', zoomPhoto);
        eachSpot.addEventListener('mouseout', function(){
            theImg.className='start';
        });

        eachSpot.addEventListener('click', function(event){
            if(event.target.id === 'center'){
                theImg.src = 'images/open_S.jpg';
                //this is very very close to what I want BUT I dont want the image to be zoomed in
            }
        });
    });

    function zoomPhoto(event){
        const thisCorner = event.target.id;
        console.log(thisCorner);
        switch(thisCorner){
            case 'center': theImg.className='center'; break;
            case 'left': theImg.className='left'; break;
            case 'right': theImg.className='right'; break;
        }
    }

    //plan: incorporate z-index and .hideme into the zoom for scene 1
})();