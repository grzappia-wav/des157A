(function(){
    'use strict';
    console.log('reading js');

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
        let message;

        if (num == ''){
            message="Oops! Looks like we're missing a number!"
            document.querySelector('#num').focus();
        } else if (adv == ''){
            message="Oops! Looks like we're missing an adverb!"
            document.querySelector('#adv').focus();
        } else if (adj1 == ''){
            message="Oops! Looks like we're missing an adjective!"
            document.querySelector('#adj1').focus();
        } else if (color == ''){
            message="Oops! Looks like we're missing a color!"
            document.querySelector('#color').focus();
        } else if (adj2 == ''){
            message="Oops! Looks like we're missing an adjective!"
            document.querySelector('#adj2').focus();
        } else if (verb == ''){
            message="Oops! Looks like we're missing a verb!"
            document.querySelector('#verb').focus();
        } else if (bodyPart1 == ''){
            message="Oops! Looks like we're missing a body part!"
            document.querySelector('#bodyPart1').focus();
        } else if (feeling1 == ''){
            message="Oops! Looks like we're missing a feeling!"
            document.querySelector('#feeling1').focus();
        } else if (bodyPart2 == ''){
            message="Oops! Looks like we're missing a body part!"
            document.querySelector('#bodyPart2').focus();
        } else if (feeling2 == ''){
            message="Oops! Looks like we're missing a feeling!"
            document.querySelector('#feeling2').focus();
        } else if (celeb == ''){
            message="Oops! Looks like we're missing a celebrity!"
            document.querySelector('#celeb').focus();
        } else if (time == ''){
            message="Oops! Looks like we're missing a time!"
            document.querySelector('#time').focus();
        } else {
            message = "Thank you! Our story engines are revving up now!";

            myText = `<h2>My Driver's Test</h2>
                    <p>Picture this: I have just turned sixteen and a half, and it is my <answer>${num}</answer>/nd/th driver's test this week. This time, I am determined to get my license.</p>
                    <p>The driver's test was going <answer>${adv}</answer>, that is, until the parallel parking. My instructor, a <answer>${adj1}</answer> woman obnoxiously chewing gum, told me to pull up next to a <answer>${color}</answer> car. I stopped the car, feeling my stress level rise.</p>
                    <p>This was it. This was the make-or-break of the test. Slowly, I moved my hand to the gear shift. I took a deep, <answer>${adj2}</answer> breath, and squeezed the shifter. But the stick wouldn’t move? Why wouldn’t it move? After frantically squeezing the stick, trying to move it into reverse, I realized I could not hear my instructor smacking her gum. My laser focus cracked, and I <answer>${verb}</answer> my head to see what was going on with the shifter. Unfortunately, my hand was not on the gear shift. It was on my instructor’s <answer>${bodyPart1}</answer>.</p>
                    <p><answer>${feeling1}</answer> rushed through me like an electric shock. I screamed “I’M SO SORRY” as my <answer>${bodyPart2}</answer> shot up in the air, as if to prove my innocence. My instructor, now <answer>${feeling2}</answer> said through gritted teeth “... Just… drive.”</p>
                    <p>It was over. I failed. My spirit crushed, I completed the parallel park. The rest of the test was silent. I felt like a failure, like <answer>${celeb}</answer>.</p>
                    <p>At the end of the test, I apologized again to my instructor, and she left the car. After a(n) <answer>${time}</answer> she came back with my score.</p>
                    <p>I passed! It was a miracle! That was how I got my driver’s license.</p>`

            madlib.innerHTML= myText;

            // madlib.scrollIntoView({
            //     behaviior: 'smooth'
            // });

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
        } 

        feedback.innerHTML= message;
    });
})();