(function(){
    'use strict';
    console.log('reading js');

    // const submit = addEventListener('#send-form');

    const myform = document.querySelector('.form');
    const feedback = document.querySelector('#feedback');

    myform.addEventListener('submit', function(event){
        event.preventDefault();

        const num = document.querySelector('#num').value;
        const adv = document.querySelector('#adv').value;
        const adj1 = document.querySelector('#adj1').value;
        const color = document.querySelector('#color').value;
        const adj2 = document.querySelector('#adj2').value;
        const verb = document.querySelector('#verb').value;
        const bodyPart1 = document.querySelector('#bodyPart1').value;
        const feeling1 = document.querySelector('#feeling1').value;
        const bodyPart2 = document.querySelector('#bodyPart2').value;
        const feeling2 = document.querySelector('#feeling2').value;
        const celeb = document.querySelector('#celeb').value;
        const time = document.querySelector('#time').value;

        let myText;

        if (num == ''){
            myText="Oops! Looks like we're missing a number!"
            document.querySelector('#num').focus();
        } else if (adv == ''){
            myText="Oops! Looks like we're missing an adverb!"
            document.querySelector('#adv').focus();
        } else if (adj1 == ''){
            myText="Oops! Looks like we're missing an adjective!"
            document.querySelector('#adj1').focus();
        } else if (color == ''){
            myText="Oops! Looks like we're missing a color!"
            document.querySelector('#color').focus();
        } else if (adj2 == ''){
            myText="Oops! Looks like we're missing an adjective!"
            document.querySelector('#adj2').focus();
        } else if (verb == ''){
            myText="Oops! Looks like we're missing a verb!"
            document.querySelector('#verb').focus();
        } else if (bodyPart1 == ''){
            myText="Oops! Looks like we're missing a body part!"
            document.querySelector('#bodyPart1').focus();
        } else if (feeling1 == ''){
            myText="Oops! Looks like we're missing a feeling!"
            document.querySelector('#feeling1').focus();
        } else if (bodyPart2 == ''){
            myText="Oops! Looks like we're missing a body part!"
            document.querySelector('#bodyPart2').focus();
        } else if (feeling2 == ''){
            myText="Oops! Looks like we're missing a feeling!"
            document.querySelector('#feeling2').focus();
        } else if (celeb == ''){
            myText="Oops! Looks like we're missing a celebrity!"
            document.querySelector('#celeb').focus();
        } else if (time == ''){
            myText="Oops! Looks like we're missing a time!"
            document.querySelector('#time').focus();
        } else {
            myText = "Thank you! Our story engines are reving up now!";
        } 

        feedback.innerHTML= myText;

        document.querySelector('#num').value='';
        document.querySelector('#adv').value='';
        document.querySelector('#adj1').value='';
        document.querySelector('#color').value='';
        document.querySelector('#adj2').value='';
        document.querySelector('#verb').value='';
        document.querySelector('#bodyPart1').value='';
        document.querySelector('#feeling1').value='';
        document.querySelector('#bodyPart2').value='';
        document.querySelector('#feeling2').value='';
        document.querySelector('#celeb').value='';
        document.querySelector('#time').value='';
    });

    //use .className to change .hidden to #madlib 
})();