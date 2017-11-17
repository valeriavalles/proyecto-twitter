window.addEventListener('load',function(){
var area = document.getElementById('textarea');
var boton = document.getElementById('save');
var lista = document.getElementById('container-links');

boton.addEventListener('click', function(event) {
  if (area.value) {
    var li = document.createElement('li');
    var link = document.createElement('p');
    link.textContent = area.value;
    //link.setAttribute('href', '#');//
    li.appendChild(link);
    lista.appendChild(li);
    area.value = '';
  }
});
area.addEventListener('keydown', tama);

function tama(){
  this.style.cssText = 'height:auto; padding:0';
  this.style.cssText = 'height:' + this.scrollHeight + 'px'
};



});   