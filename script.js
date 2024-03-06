const helloworld = "Hello World!";
for (let i = 0; i < helloworld.length; i++) {
  const span = document.createElement("span");
  span.innerText = helloworld[i];
  span.style.color = 'rgb(
  ${Math.floor(Math.random()*255)},
  ${Math.floor(Math.random()*255)},
  ${Math.floor(Math.random()*255)})';
  span.style.fontSize='${Math.floor(Math.random()*100)+70}px';
  document.body.appendChild(span);
}

