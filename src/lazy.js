const isIntersecting = (entry) => {
  return entry.isIntersecting;
};

const accion = (entry) => {
  const node = entry.target
  console.log("Hola");
  observer.unobserve(node)
};

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(accion);
});

export const registerImg = (img) => {
  observer.observe(img);
};
