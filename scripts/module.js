export function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

export let user_picture = document.querySelector('.usermove')
export let computer_picture = document.querySelector('.computer_move')

export let won = document.querySelector('.won')
export let lost = document.querySelector('.lost')
export let tie = document.querySelector('.tie')
