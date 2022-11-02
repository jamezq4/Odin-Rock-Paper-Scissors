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
        return "You win!, rock beats scissors";
    }
    //if computer chose rock and player chose scissors...
    else if (computerSelection === 'ROCK' && playerSelection == 'SCISSORS')
    {
        return "You lose!, rock beats scissors";
    }

    //SCISSORS BEATS PAPER
    //if player chose scissors and computer chose paper...
    if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')
    {
        return "You win! Scissors beats paper";
    }

    else if (computerSelection === 'SCISSORS' && playerSelection === 'PAPER')
    {
        return "You lose, Scissors beats paper";
    }

    //PAPER BEATS ROCK
    //if player chooses paper and computer chooses rock.
    if (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    {
        return "You win!, paper beats rock.";
    }

    

    



    

    //Paper beats rock

    //if theyre equal to each other return a tie

}

const computerSelection = getComputerChoice();
const playerSelection = "paper";

console.log(playRound(playerSelection.toUpperCase(), computerSelection.toUpperCase()));
