let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg')

const userScoreData = document.querySelector('#user-score');
const compScoreData = document.querySelector('#comp-score');

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

const drawGame = ()=> {
    // console.log('The game was Draw')
    msg.innerText = 'Game was Draw. Play Again !'
    msg.style.backgroundColor = 'black'
}

const showWinner = (userWin,userChoice,compChoice)=> {
    if(userWin) {
        userScore++;
        userScoreData.innerText = userScore;
        // console.log('You Win !')
        msg.innerText = `You Win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = 'green'
    }else{
        compScore++;
        compScoreData.innerText = compScore
        // console.log('You Lose !')
        msg.innerText = `You Lose ! ${compChoice} beats your ${userChoice} `
        msg.style.backgroundColor = 'red'
    }
}

const playGame = (userChoice)=> {
    // console.log('user choice = ', userChoice)
    let compChoice = genCompChoice();
    // console.log('comp choice = ', compChoice)

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === 'rock'){
            userWin = compChoice === 'paper' ? false : true;
            
        }else if(userChoice === 'paper'){
            userWin = compChoice === 'scissors' ? false : true;
          
        }else {
            userWin = compChoice === 'rock' ? false : true;
          
        }
        showWinner(userWin,userChoice,compChoice)
    }
    setTimeout(()=> {
        console.clear();
    }, 2000)
} 


choices.forEach((choice) =>{
    choice.addEventListener('click', ()=> {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice)
    })
})

