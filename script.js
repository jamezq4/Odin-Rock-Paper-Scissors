function getComputerChoice()
{

    //code that gives a random number between 1 and 3
    let rand = Math.floor(Math.random() * 3) + 1;

    //deciding whether to return 'Rock', 'Paper', or Scissors'
    if (rand === 1)
    {
        return 'Rock';
    }
    else
    {
        return rand;
    }
}

let choice;
for (let i = 0; i < 5; i++)
{
    choice = getComputerChoice();
    console.log(typeof choice);
}