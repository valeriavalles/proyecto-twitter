window.addEventListener('load',function(){
var area = document.getElementById('textarea');
var boton = document.getElementById('save');
var lista = document.getElementById('container-links');
var contador = document.getElementById('contador');
console.log(contador);

boton.addEventListener('click', function(event) {
  if (area.value) {
    var li = document.createElement('li');
    var link = document.createElement('p');
    link.textContent = area.value;
    
    li.appendChild(link);
    lista.appendChild(li);
    area.value = ''; 
  
  }
});
 area.addEventListener('keyup', habilitar)
function habilitar() {
  if(area.value!= ""&&area.value.length>0){
    boton.disabled = false;
  }else{
    boton.disabled = true;
  }  
};


area.addEventListener('keydown', tama);

function tama(){
  this.style.cssText = 'height:auto; padding:0';
  this.style.cssText = 'height:' + this.scrollHeight + 'px'
  contador.textContent = 140 - area.value.length;
};

//contador.textContent = 140 - area.length ;

});   