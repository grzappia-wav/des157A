(function(){
    'use strict';
    console.log('reading js');

    const hotspots = document.querySelectorAll('#container div');
    const theImg = document.querySelector('div img');

    hotspots.forEach(function(eachSpot){
        eachSpot.addEventListener('mouseover', zoomPhoto);
        eachSpot.addEventListener('mouseout', function(){
            theImg.className='start';
        });

        eachSpot.addEventListener('click', function(event){
            if(event.target.id === 'center'){
                theImg.src = 'images/open_S.jpg';
                //this is very very close to what I want BUT I dont want the image to be zoomed in
                //I ma experiment with innerHTML more
            }
        });
    });

    function zoomPhoto(event){
        const thisCorner = event.target.id;
        console.log(thisCorner);
        switch(thisCorner){
            case 'center': theImg.className='center'; break;
        }
    }

})();