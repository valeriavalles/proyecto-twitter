window.addEventListener('load', function() {
/* llamando a los id para los eventos*/ 
  var area = document.getElementById('textarea');
  var boton = document.getElementById('save');
  var lista = document.getElementById('container-links');
  var contador = document.getElementById('contador');
 
  // agregandole evento al boton tweet
  
  boton.addEventListener('click', function(event) {
    if (area.value) {
      var li = document.createElement('li');
      var link = document.createElement('p');
      link.textContent = area.value;
      li.appendChild(link);
      lista.appendChild(li);
      area.value = '';

      time = moment().format('LT');
      spantime = document.createElement('span');
      spantime.textContent = time;
      li.appendChild(spantime);
    }
  });
  // habilitando y desabilitando el boton tweet
  area.addEventListener('keyup', habilitar);
  function habilitar() {
    if (area.value != ' ' && (area.value.length > 0) && area.value.length <= 140) {
      boton.disabled = false;
    } else {
      boton.disabled = true;
    } 
    if (area.value.length > 120) {
      contador.classList.add('nearly');
    }
    if (area.value.length > 130) {
      contador.classList.add('very-nearly');
    }
  };
  area.addEventListener('keydown', tama);
  function tama() {
    this.style.cssText = 'height:auto; padding:0';
    this.style.cssText = 'height:' + this.scrollHeight + 'px';
    contador.textContent = 140 - area.value.length;
  };
}); 

span.textContent = moment().format('LT');  