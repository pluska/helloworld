const getMain = () => {
  return document.getElementById('main');
}

const helloWorld = (body) => {
  const title = document.createElement('h1');
  title.textContent = 'Hello World';
  body.appendChild(title);
}
const main = getMain();
helloWorld(main);