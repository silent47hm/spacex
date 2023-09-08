let buttons = document.querySelectorAll('.nav_button');

buttons.forEach((btn) => {
  btn.addEventListener('click', function(){
    const id_name = btn.classList[1];
    activatediv(id_name);
  });
})

function activatediv(id_name)
{
  
  
  checkdivs(id_name);
}

function checkdivs(id_name){
  const check_arry = ['t1', 't2', 't3'];
  check_arry.forEach((item_name) => {
    if(item_name == id_name){
      var selected_ele = document.getElementById(item_name);
      selected_ele.classList.add('div_active');
    }else{
      var other_el = document.getElementById(item_name);
      other_el.style.display = 'none';
      other_el.classList.remove('div_active');
    }
  })
  

}























































