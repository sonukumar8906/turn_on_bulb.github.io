const button_on = document.querySelector('.light-on');
const button_off = document.querySelector('.light-off');

button_on.addEventListener('click', () =>{
       const turn = document.querySelector('.lightoff');
       turn.setAttribute("src", "img/lighton.png")
});
button_off.addEventListener('click', () =>{
       const turn = document.querySelector('.lightoff');
       turn.setAttribute("src", "img/lightoff.png")
});
