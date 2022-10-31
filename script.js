function getComputerChoice()
{

    //code that gives a random number between 1 and 3
    let rand = Math.floor(Math.random() * 3) + 1;
    console.log(rand);
}

for (let i = 0; i < 5; i++)
{
    getComputerChoice();
}