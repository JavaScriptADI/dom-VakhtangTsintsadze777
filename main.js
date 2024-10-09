// 1
// let buttonClick = document.getElementById('button');
// buttonClick.addEventListener('click', ()=>{
//     console.log('button clicked')
// });

// 2, 3
let buttonClick2 = document.getElementById('button2');
buttonClick2.style.backgroundColor = 'blue';

buttonClick2.addEventListener('click', ()=> {
    buttonClick2.style.backgroundColor = 'red';
    buttonClick2.style.border = '3px solid purple'
    buttonClick2.textContent = 'Clicked'
})
