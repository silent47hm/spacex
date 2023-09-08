let buttons2 = document.querySelector('#nav_buttons2');
var bhome = document.querySelector('#bhome');
console.log(buttons2);
buttons2.addEventListener('click', function() {
    console.log(bhome);
    bhome.classList.toggle('hide');
})