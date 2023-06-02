const isIntersecting = (entry) => {
  return entry.isIntersecting;
};

const loadImg = (entry) => {
  const container = entry.target
  const img = container.querySelector('img')
  const imgUrl = img.dataset.src
  img.src = imgUrl
  
  loadedImages ++
  printLog();

  observer.unobserve(container)
};

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadImg);
});

export const registerImg = (img) => {
  observer.observe(img);
};
