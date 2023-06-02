const API = 'https://randomfox.ca/images'
const appContainer = document.getElementById("app");
const max = 122
const min = 1
const random = () => Math.floor (Math.random() * (max-min)) + min
const addButton = document.querySelector('#addButton')

const createImgNode = (urlApi) => {
  const imgDiv = document.createElement("div");
  imgDiv.className = "p-4";

  const img = document.createElement("img");
  img.className = "mx-auto";
  img.width = "320";
  img.src = `${urlApi}/${random()}.jpg`

  imgDiv.appendChild(img);

  return imgDiv
};

const createImg = () => {
    const newImg = createImgNode(API)
    appContainer.appendChild(newImg);
}

addButton.addEventListener('click', createImg)