
window.onload = function() {
  let quien = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let que = ['my homework', 'my phone', 'the car'];
  let cuando = ['before the class', 'cuando I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  let quienIndex = Math.floor(Math.random() * quien.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let queIndex = Math.floor(Math.random() * que.length);
  let cuandoIndex = Math.floor(Math.random() * cuando.length);

  let excusaCompleta = quien[quienIndex] + ' ' + action[actionIndex] + ' ' + que[queIndex] + ' ' + cuando[cuandoIndex];

  document.querySelector("#excuse").innerHTML = excusaCompleta;
};