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

// function rockScissorCase(p, c)
// {
//     if (p === 'ROCK')
//     {
//         return 1;
//     }
//     else
//     {
//         return 2;
//     }
// }

// function scissorPaperCase(p, c)
// {
//     if (p === 'SCISSORS')
//     {
//         return 1;
//     }
//     else
//     {
//         return 2;
//     }
// }

// function paperRockCase(p, c)
// {
//     if (p === 'PAPER')
//     {
//         return 1;
//     }
//     else
//     {
//         return 2;
//     }
// }

 function playRound(playerSelec)
 {
    //playerSelec.toUpperCase();
    const computerChoice = getComputerChoice().toUpperCase();
    console.log(`computer choice was ${computerChoice}`);
    console.log(`Player chose ${playerSelec}`);

    //let roundCase;

    //if (playerSelec === computerChoice)
    //{
      //return "It's a tie!, try again.";
   // }
    //else
    //{
      //return "Nah";
   // }
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
    let roundResult;

    //const playerChoices = document.querySelectorAll('button');
    const playerChoices = document.getElementsByClassName('choice');
    let playerChoiceArray = Array.from(playerChoices);

    playerChoiceArray.forEach((choice) => {

        choice.addEventListener('click', () => {
            playerSelection = choice.id;
            //console.log(`Player chose ${playerSelection}`);
        });
    });

    const roundButton = document.getElementById('play-round');
    //('click', playRound)
    roundButton.addEventListener('click', () => {
        playRound(playerSelection.toUpperCase());
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

