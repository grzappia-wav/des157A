(function(){
    'use strict';
    console.log('reading js');

    // const hotspots = document.querySelectorAll('#scene2, #scene3, #scene4');
    // const theImg = document.querySelector('#scene1 .backgroundImg');
    // const open = document.querySelector('#scene4');

    // console.log(hotspots);

    // hotspots.forEach(function(eachSpot){
    //     eachSpot.addEventListener('mouseover', zoomPhoto);
    //     eachSpot.addEventListener('mouseout', function(){
    //         theImg.className='backgroundImg';
    //     });

    //     eachSpot.addEventListener('click', function(event){
    //         if(event.target.id === 'scene4'){
    //             open.remove.className='hideme';
    //             open.style.zIndex='3';
    //         }
    //     });
    // });

    // function zoomPhoto(event){
    //     const thisCorner = event.target.id;
    //     console.log(thisCorner);
    //     switch(thisCorner){
    //         case 'scene4': theImg.className='scene4'; break;
    //         case 'scene2': theImg.className='scene2'; break;
    //         case 'scene3': theImg.className='scene3'; break;
    //     }
    // }

    //plan: incorporate z-index and .hideme into the zoom


    const scene2 = document.querySelector('#scene2');
    const scene3 = document.querySelector('#scene3');
    const scene4 = document.querySelector('#scene4');
    const scene4Img = document.querySelector('#scene4 img');
    const scene5 = document.querySelector('#scene5');
    
    scene2.addEventListener('mouseover', function(){
        // console.log('over');
        const scene1Img = document.querySelector('#scene1 img');
        scene1Img.className='scene2';
        scene2.style.opacity='1';
    });

    scene2.addEventListener('mouseout', function(){
        // console.log('over');
        const scene1Img = document.querySelector('#scene1 img');
        scene1Img.classList.remove='scene2';
        scene1Img.className='scene1';
        scene2.style.opacity='0';
    });

    scene3.addEventListener('mouseover', function(){
        // console.log('over');
        const scene1Img = document.querySelector('#scene1 img');
        scene1Img.className='scene3';
        scene3.style.opacity='1';
    });

    scene3.addEventListener('mouseout', function(){
        // console.log('over');
        const scene1Img = document.querySelector('#scene1 img');
        scene1Img.classList.remove='scene3';
        scene1Img.className='scene1';
        scene2.style.opacity='0';
    });

    scene4.addEventListener('click', function(){
        scene4Img.style.opacity='1';
    });

    scene4Img.addEventListener( 'transitionend', function(){
        scene5.removeAttribute('class');
        scene5.style.zIndex='7'
    }, {once: true} );

})();