let won = document.querySelector('.won')
let lost = document.querySelector('.lost')
let tie = document.querySelector('.tie')
let stat = document.querySelector('.stat')

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function control(value) {
    let user_picture = document.querySelector('.usermove')
    let computer_picture = document.querySelector('.computer_move')

    if (value === 'rock') { user_picture.style.backgroundImage = 'url(../assets/rock.png)'; }
    else if (value === 'paper') { user_picture.style.backgroundImage = 'url(../assets/paper.jpg)'; }
    else { user_picture.style.backgroundImage = 'url(../assets/scissor.jpg)'; }

    let computer_pick = getRandomInt(1, 4)
    if (computer_pick === 1) { computer_picture.style.backgroundImage = 'url(../assets/rock.png)'; }
    else if (computer_pick === 2) { computer_picture.style.backgroundImage = 'url(../assets/paper.jpg)'; }
    else { computer_picture.style.backgroundImage = 'url(../assets/scissor.jpg)'; }

    if(user_picture.style.backgroundImage === computer_picture.style.backgroundImage){
        let score = parseInt(tie.innerHTML)
        score++;
        tie.innerHTML = score
        stat.innerHTML = 'ITS A TIE'
    }
    else if(value === 'rock' && computer_pick === 3){
        let score = parseInt(won.innerHTML)
        score++;
        won.innerHTML = score
        stat.innerHTML = 'YOU WON'
    }
    else if(value === 'paper' && computer_pick === 1){
        let score = parseInt(won.innerHTML)
        score++;
        won.innerHTML = score
        stat.innerHTML = 'YOU WON'
    }
    else if(value === 'scissors' && computer_pick === 2){
        let score = parseInt(won.innerHTML)
        score++;
        won.innerHTML = score
        stat.innerHTML = 'YOU WON'
    }
    else{
        let score = parseInt(lost.innerHTML)
        score++;
        lost.innerHTML = score
        stat.innerHTML = 'YOU LOST'
    }
}