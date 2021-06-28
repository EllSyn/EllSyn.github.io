const element = document.getElementById('container');

element.style.opacity = 0;

const fadeIn = (element) => {
  if (element.style.opacity <= 1) {
    setTimeout(() => {
      element.style.opacity = parseFloat(element.style.opacity) + 0.035;
      fadeIn(element);
    }, 50);
  }
};

window.onload = fadeIn(element);
