(function(){
    'use strict'
    console.log('reading JS');


    const bubbles = document.querySelector('.bubbles');
    const bubWav = new Audio('audio/bubbles.wav');
    const coins = document.querySelector('.jingle');
    const coinWav = new Audio('audio/coin_drop.wav');

    // bubbles.addEventListener('mousedown', function(){
    //     bubWav.currentTime = 0;
    //     bubWav.play();
    // });

    // coins.addEventListener('mousedown', function(){
    //     coinWav.play();
    // });

    document.addEventListener('mousedown', function(event){
    if (event.target.classList.contains('bubbles')){
        bubWav.currentTime = 0;
        bubWav.play();
    }

    if (event.target.classList.contains('jingle')){
        coinWav.currentTime = 0;
        coinWav.play();
    }
    });

    //overlay JS
    document.querySelector('#open').addEventListener('click', function(){
        document.querySelector('#overlay').className='showing';
    });

    document.querySelector('#close').addEventListener('click', function(){
        document.querySelector('#overlay').className='hidden';
    });

    document.addEventListener('keydown', function(event){
        if(event.key == "Escape"){
            document.querySelector('#overlay').className='hidden';
        }
    });

    //Game JS
    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions');
    const gameData = {
        dice: ['die1.png', 'die2.png', 'die3.png', 
            'die4.png', 'die5.png', 'die6.png'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 30 //set to exactly 30
    };

    startGame.addEventListener('click', function(){
        gameData.index = Math.round(Math.random()); //randomly rounds either to 1 or 0, thus selecting player 1 or 2
        gameControl.innerHTML = '<button id ="quit" class="bubbles">Give In?</button>';

        document.querySelector('#quit').addEventListener('click', function(){
            location.reload();
        });

        //manual sound
        document.querySelector('#quit').addEventListener('mousedown', function(){
            bubWav.play();
        });

        setUpTurn();
    }); //END start game event listener

    function setUpTurn() {
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id ="roll" class="jingle">Roll the Dice</button>';
        document.querySelector('#roll').addEventListener('click', function(){
            throwDice()
        });
    } //END set up turn

    function throwDice(){
        actionArea.innerHTML= '';
        gameData.roll1 = Math.floor(Math.random()*6) + 1; //math.floor rounds down the random number (+1 is there to fix the scale from 0--5 to 1--6 cause JS starts at 0)
        gameData.roll2 = Math.floor(Math.random()*6) + 1;

        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        game.innerHTML +=  `<p><img src="images/${gameData.dice[gameData.roll1-1]}"><img src="images/${gameData.dice[gameData.roll2-1]}"></p>`;
        gameData.rollSum =  gameData.roll1 + gameData.roll2;

        if (gameData.rollSum === 2){
            game.innerHTML += '<p>The Kracken has stolen your coins!</p>';
            gameData.score[gameData.index] = 0; //this sets the players score back to 0
            gameData.index ? (gameData.index = 0) : (gameData.index = 1); //this line switches the player

            setTimeout(setUpTurn, 2000);
        }
        
        else if (gameData.roll1 === 1 || gameData.roll2 === 1){
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>Luck is thin! Switch to ${gameData.players[gameData.index]}</p>`;
            setTimeout(setUpTurn, 2000);
        }
        
        else {
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain" class="jingle">Roll</button> <button id="pass" class="bubbles">Pass</button>';

            document.querySelector('#rollagain').addEventListener('click', function(){
                throwDice();
            });

            document.querySelector('#pass').addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });
        }

        showCurrentScore();
        checkWinningCondition();
    }; //END function throw dice

    function checkWinningCondition() {
        if (gameData.score[gameData.index] === gameData.gameEnd){ //I changed > to === in the if statement, this makes the winning condition scoring exactly 30 points
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;

            actionArea.innerHTML = '';
            document.querySelector('#quit').innerHTML = 'Begin a New Bid';
        } else if (gameData.score[gameData.index] > gameData.gameEnd){ //I added this else if statement 
            //switches players if a player scores higher than 30
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            //after switching, the current player is announced the winner
            score.innerHTML = `<h2>Uh oh, ${gameData.players[gameData.index]} wins by default!`;
            
            //these 3 lines clear the game and action areas, then prompt to begin a new game
            game.innerHTML = '';
            actionArea.innerHTML = '';
            document.querySelector('#quit').innerHTML = 'Begin a New Bid';
        } else {
           showCurrentScore();
        }
    }

    function showCurrentScore(){
            score.innerHTML = `<p>The score is currently: <strong>${gameData.players[0]}</strong>: <strong>${gameData.score[0]}</strong> and <strong>${gameData.players[1]}</strong>: <strong>${gameData.score[1]}</strong></p>`;
        }

})();