function getComputerChoice()
{

    //code that gives a random number between 1 and 3
    let rand = Math.floor(Math.random() * 3) + 1;

    //deciding whether to return 'Rock', 'Paper', or Scissors'
     if (rand === 1)
     {
         return 'Rock';
     }
     else if (rand === 2)
     {
         return 'Paper';
     }
     else
     {
         return 'Scissors';
     }
}

 function rockScissorCase(p, c)
 {
     if (p === 'ROCK')
     {
         return 1;
     }
     else
     {
         return 2;
     }
 }

 function scissorPaperCase(p, c)
 {
     if (p === 'SCISSORS')
     {
         return 1;
     }
     else
     {
         return 2;
     }
 }

 function paperRockCase(p, c)
 {
     if (p === 'PAPER')
     {
         return 1;
     }
     else
     {
         return 2;
     }
 }

 function playRound(playerSelec, computerChoice)
 {
    //playerSelec.toUpperCase();
    //const computerChoice = getComputerChoice().toUpperCase();
    //computerChoice = getComputerChoice().toUpperCase();
    const computerDisplaySelec = document.getElementById('computer-selec');
    const playerChoiceDisp = document.getElementById('player-selec');

    computerDisplaySelec.textContent = '';
    computerDisplaySelec.textContent += computerChoice;
    setTimeout(function(){playerChoiceDisp.textContent = '?'}, 3000);
    setTimeout(function(){computerDisplaySelec.textContent = '?'}, 3000);
    //computerDisplaySelec.textContent += computerChoice;
    //console.log(`computer choice was ${computerChoice}`);
    //console.log(`Player chose ${playerSelec}`);



    let roundCase;

    if (playerSelec === computerChoice)
    {
      return "It's a tie!, try again.";
    }
    else if ((playerSelec === 'ROCK' && computerChoice === 'SCISSORS') || (computerChoice === 'ROCK' && playerSelec === 'SCISSORS'))
    {
      roundCase = rockScissorCase(playerSelec, computerChoice);
      return roundCase;
    }
    else if ((playerSelec === 'SCISSORS' && computerChoice === 'PAPER') || (computerChoice === 'SCISSORS' && playerSelec === 'PAPER'))
    {
      roundCase = scissorPaperCase(playerSelec, computerChoice);
      return roundCase;
    }
    else
    {
      roundCase = paperRockCase(playerSelec, computerChoice);
      return roundCase
    }
 }
//     let roundCase;
//     if (playerSelection === computerSelection)
//     {
//         return "It's a tie!, try again.";
//     }

//     else if ((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') || (computerSelection === 'ROCK' && playerSelection === 'SCISSORS'))
//     {
//         roundCase = rockScissorCase(playerSelection, computerSelection);
//         return roundCase;
//     }
//     else if ((playerSelection === 'SCISSORS' && computerSelection === 'PAPER') || (computerSelection === 'SCISSORS' && playerSelection == 'PAPER'))
//     {
//         roundCase = scissorPaperCase(playerSelection, computerSelection);
//         return roundCase;
//     }
//     else
//     {
//         roundCase = paperRockCase(playerSelection, computerSelection);
//         return roundCase;
//     }
    

    //if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS')
    //{
      //  return 1;
   // }
    //if computer chose rock and player chose scissors...
   // else if (computerSelection === 'ROCK' && playerSelection === 'SCISSORS')
    //{
      //  return 2;
   // }

    //SCISSORS BEATS PAPER
    //if player chose scissors and computer chose paper...
    //if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')
    //{
      //  return 1;
    //}

    //else if (computerSelection === 'SCISSORS' && playerSelection === 'PAPER')
    //{
      //  return 2;
    //}

    //PAPER BEATS ROCK
    //if player chooses paper and computer chooses rock.
    //if (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    //{
      //  return 1;
    //}

    //else if (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    //{
      //  return 2;
    //}


    //TIE
    //if (playerSelection === computerSelection)
    //{
      //  return "Its a tie!, try again";
    //}

//}

function game()
{
    //Getting player selection
    let playerSelection;
    let computerSelection;
    let roundResult;

    let playerRoundsWon = 0;
    let computerRoundsWon = 0;
    const playerScoreDisplay = document.getElementById('player-score');

    //const playerChoices = document.querySelectorAll('button');
    const playerChoices = document.getElementsByClassName('choice');
    let playerChoiceArray = Array.from(playerChoices);

    const displayPlayerSelec = document.getElementById('player-selec');


    playerChoiceArray.forEach((choice) => {

        choice.addEventListener('click', () => {
          //if player or computer hasnt reached 5 rounds yet

            playerSelection = choice.id;
            displayPlayerSelec.textContent = '';
            displayPlayerSelec.textContent += playerSelection;

            //console.log(`Player chose ${playerSelection}`);
        });
    });

    const roundButton = document.getElementById('play-round');
    const output = document.getElementById('output');

    const computerScoreDisplay = document.getElementById('computer-score');

    //('click', playRound)
    roundButton.addEventListener('click', () => {
        //if player or computer hasnt reached  5 rounds yet, then perform the logic

        computerSelection = getComputerChoice().toUpperCase();
        roundResult = playRound(playerSelection.toUpperCase(), computerSelection);
        //output.textContent = '';
        //output.textContent += roundResult;
        //setTimeout(function(){output.textContent = ''}, 3000);

        if (roundResult === 1)
        {

          playerRoundsWon++;
          output.textContent = '';
          output.textContent += `You win! ${playerSelection} beats ${computerSelection}`;

          playerScoreDisplay.textContent = '';
          playerScoreDisplay.textContent += playerRoundsWon;
        }
        else if (roundResult === 2)
        {
          computerRoundsWon++;
          output.textContent = ''
          output.textContent += `You lose... ${computerSelection} beats ${playerSelection}`;

          computerScoreDisplay.textContent = '';
          computerScoreDisplay.textContent += computerRoundsWon;
        }
        else
        {
          output.textContent = '';
          output.textContent += roundResult;
        }
        //console.log(computerRoundsWon);
        setTimeout(function(){output.textContent = ''}, 3000);


        //output.textContent = '';
        //output.textContent += roundResult;
        //setTimeout(function(){output.textContent = ''}, 3000);
        
    });  //
    //playRound(playerSelection);
    //const computerChoice = getComputerChoice().toUpperCase();
    //console.log(`computer choice was ${computerChoice}`);
    //THIS SHOULD BE IN A PLAY ROUND FUNCTION


    //let round_result;
    //let playerRoundsWon = 0;
    //let computerRoundsWon = 0;































    //call playRound function five times, 5 round game
    // for (let i = 0; i < 5; i++)
    // {
    //     //getting player and computer selection
        
    //     //let playerSelection = prompt("Rock, paper, or scissors?").toUpperCase();
    //     while (true)
    //     {
    //         playerSelection = prompt("Rock, paper, or scissors?").toUpperCase();

    //         if (playerSelection === 'ROCK' || playerSelection === 'PAPER' || playerSelection === 'SCISSORS')
    //         {
    //             break;
    //         }
    //     }




    //     const computerSelection = getComputerChoice().toUpperCase();

    //     round_result = playRound(playerSelection, computerSelection);

    //     if (round_result === 1)
    //     {
    //         playerRoundsWon++;
    //         console.log(`You Win!, ${playerSelection.toLowerCase()} beats ${computerSelection.toLowerCase()}`);
    //     }
    //     else if (round_result === 2)
    //     {
    //         computerRoundsWon++;
    //         console.log(`You lose... ${computerSelection.toLowerCase()} beats ${playerSelection.toLowerCase()}`);
    //     }
        // else
        // {
        //     console.log(round_result);
        // }


        //if (playerRoundsWon === 3)
        //{
            //break;
        //}
        //else if (computerRoundsWon === 3)
        //{
            //break;
        //}
        
    //}

    // if (playerRoundsWon > computerRoundsWon)
    // {
    //     console.log("You won the game! Congratulations!");
    // } 
    // else if (playerRoundsWon === computerRoundsWon)
    // {
    //     console.log("The result is a tie");
    // }
    // else
    // {
    //     console.log("You lost the game...");
    // }

}
//let playerSelection;
game();

