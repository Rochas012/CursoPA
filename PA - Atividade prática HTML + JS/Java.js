
let valor = 0;
function contador(num) {
  valor += num;
  document.getElementById('valor').innerText = valor;
}


function adicionar() {
  const texto = document.getElementById('item').value;
  if (texto.trim() === '') return;
  const li = document.createElement('li');
  li.textContent = texto;
  document.getElementById('lista').appendChild(li);
  document.getElementById('item').value = '';
}


function toggleImagem() {
  const img = document.getElementById('foto');
  img.style.display = (img.style.display === 'none') ? 'block' : 'none';
}


let troca = false;
function trocarImagem() {
  const img = document.getElementById('troca');
  if (!troca) {
    img.src = "https://imgs.search.brave.com/XwQlV1PA3Rivk6rO3t7iJBa8qf2xZkxGzCvzRWq8OfQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZmF2cG5nLmNvbS8x/MS8xOS8xNC9ndWls/dHktZ2Vhci14cmQt/ZWxwaGVsdC12YWxl/bnRpbmUtc29sLWJh/ZGd1eS1yYW1sZXRo/YWwtdmFsZW50aW5l/LXdpa2ktcG5nLWZh/dnBuZy1tTjJoZ0hN/VkRKR3VRMkdNYjFW/VHI5R3VLX3QuanBn";
  } else {
    img.src = "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/elphelt_strive.png";
  }
  troca = !troca;
}


function addTarefa() {
  const texto = document.getElementById('tarefa').value;
  if (texto.trim() === '') return;
  const li = document.createElement('li');
  li.textContent = texto + ' ';
  const btn = document.createElement('button');
  btn.textContent = 'Remover';
  btn.onclick = () => li.remove();
  li.appendChild(btn);
  document.getElementById('tarefas').appendChild(li);
  document.getElementById('tarefa').value = '';
}
