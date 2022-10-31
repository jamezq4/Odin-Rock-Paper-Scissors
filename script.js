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
    //Rock beats scissors


    //Scissors beats paper

    //Paper beats rock

    //if theyre equal to each other return a tie


    console.log(playerSelection);
    console.log(computerSelection);
}

const computerSelection = getComputerChoice();
const playerSelection = "RocK";

playRound(playerSelection.toUpperCase(), computerSelection.toUpperCase());
