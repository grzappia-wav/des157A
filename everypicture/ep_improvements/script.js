(function(){
    'use strict';
    console.log('reading js');

    const scene2 = document.querySelector('#scene2');
    const scene3 = document.querySelector('#scene3');
    const scene4 = document.querySelector('#scene4');
    const scene4Img = document.querySelector('#scene4 img');
    const scene5 = document.querySelector('#scene5');

    const zoom6 = document.querySelector('#zoom6');
    const scene6 = document.querySelector('#scene6');

    const zoom7 = document.querySelector('#zoom7');
    const scene7 = document.querySelector('#scene7');
    
    //these 2 event listeners cause the text to pop up on the right and left
    scene2.addEventListener('click', function(){
        scene2.style.opacity='1';
    });

    scene3.addEventListener('click', function(){
        scene3.style.opacity='1';
    });

    //these 2 event listeners cause the center image to pop up, and transition to the next image
    scene4.addEventListener('click', function(){
        scene4Img.style.opacity='1';
    });

    scene4Img.addEventListener( 'transitionend', function(){
        scene5.removeAttribute('class');
        scene5.style.zIndex='7';
    }, {once: true} );


    //these 2 event listeners cause scene 6 to appear on click one, and disappear on click 2
    zoom6.addEventListener('click', function(){
        console.log('klack');

        scene6.style.opacity='1';
        scene6.style.zIndex='9';
    });

    scene6.addEventListener( 'click', function(){
        scene6.style.opacity='0';
        scene6.style.zIndex='1';
    });

    //these 2 event listeners cause scene 7 to appear on click one, and disappear on click 2
    zoom7.addEventListener('click', function(){
        console.log('klack');

        scene7.style.opacity='1';
        scene7.style.zIndex='9';
    });

    scene7.addEventListener( 'click', function(){
        scene7.style.opacity='0';
        scene7.style.zIndex='1';
    });

})();