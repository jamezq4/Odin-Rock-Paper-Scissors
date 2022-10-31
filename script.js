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

const computerChoice = getComputerChoice();
