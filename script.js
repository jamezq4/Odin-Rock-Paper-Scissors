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

function playRound(playerSelection, computerSelection)
{
    //ROCK BEATS SCISSORS,
    //If player chose rock, and computer chose scissors...
    if (playerSelection === 'ROCK' && computerSelection == 'SCISSORS')
    {
        return 1;
    }
    //if computer chose rock and player chose scissors...
    else if (computerSelection === 'ROCK' && playerSelection == 'SCISSORS')
    {
        return 2;
    }

    //SCISSORS BEATS PAPER
    //if player chose scissors and computer chose paper...
    if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')
    {
        return 1;
    }

    else if (computerSelection === 'SCISSORS' && playerSelection === 'PAPER')
    {
        return 2;
    }

    //PAPER BEATS ROCK
    //if player chooses paper and computer chooses rock.
    if (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    {
        return 1;
    }

    else if (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    {
        return 2;
    }


    //TIE
    if (playerSelection === computerSelection)
    {
        return "Its a tie!, try again";
    }

}

function game()
{
    let round_result;
    let playerSelection;
    //call playRound function five times, 5 round game
    for (let i = 0; i < 5; i++)
    {
        //getting player and computer selection
        
        //let playerSelection = prompt("Rock, paper, or scissors?").toUpperCase();
        while (true)
        {
            playerSelection = prompt("Rock, paper, or scissors?").toUpperCase();

            if (playerSelection === 'ROCK' || playerSelection === 'PAPER' || playerSelection === 'SCISSORS')
            {
                break;
            }
        }
        //const playerSelection = prompt("Rock, paper, or scissors?").toUpperCase();
        const computerSelection = getComputerChoice().toUpperCase();

        round_result = playRound(playerSelection, computerSelection);

        if (round_result === 1)
        {
            console.log(`You Win!, ${playerSelection.toLowerCase()} beats ${computerSelection.toLowerCase()}`);
        }
        else
        {
            console.log(round_result);
        }
        //console.log(round_result);
        
    }


    //outside for loop, now we should display the winner of the match.
    //Probably should keep a win counter for both the player and the computer
}

game();
//const computerSelection = getComputerChoice();
//const playerSelection = "rock";

//console.log(playRound(playerSelection.toUpperCase(), computerSelection.toUpperCase()));
