import { registerImg } from "./lazy";

const API = 'https://randomfox.ca/images'
const appContainer = document.getElementById("app");
const max = 122
const min = 1
const random = () => Math.floor (Math.random() * (max-min)) + min
const addButton = document.querySelector('#addButton')
const clearButton = document.querySelector('#clearButton')

const clear = () => {
  appContainer.innerHTML = ''
}

const createImgNode = (urlApi) => {
  const imgDiv = document.createElement("div");
  imgDiv.className = "p-4";

  const img = document.createElement("img");
  img.className = "mx-auto";
  img.width = "320";
  img.dataset.src = `${urlApi}/${random()}.jpg`

  const imgWrapper = document.createElement("div");
  imgWrapper.className = "bg-gray-300";
  imgWrapper.style.minHeight = "100%";
  imgWrapper.style.display = "inline-block";

  imgWrapper.appendChild(img)
  imgDiv.appendChild(imgWrapper);

  appendedImages ++
  printLog();
  
  return imgDiv
};

const createImg = () => {
    const newImg = createImgNode(API)
    appContainer.appendChild(newImg);
    registerImg(newImg)
}

addButton.addEventListener('click', createImg)
clearButton.addEventListener('click', clear)