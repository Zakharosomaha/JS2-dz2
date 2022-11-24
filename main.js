let red = document.querySelector('.btnred')
let yellow = document.querySelector('.btnyellow')
let green = document.querySelector('.btngreen')
let reset = document.querySelector('.btn-reset')
let tereze = document.querySelector('.tereze')



red.addEventListener('click', () => {
    setTimeout(()  =>{
        tereze.style.backgroundColor = "red"
    },2000)
    console.log('RED');
})


yellow.addEventListener('click', () => {
    setTimeout(()  =>{
        tereze.style.backgroundColor = "yellow"
    },2000)
    console.log('YELLOW');
})

green.addEventListener ('click', () => {
    setTimeout(() => {
        tereze.style.backgroundColor = 'green'
    },2000)
    console.log('GREEN');
})

reset.addEventListener('click', () =>{
    setTimeout(() => {
        tereze.style.backgroundColor = "white"
    },100)
    console.log('Reset');
})