const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");
const images = ["img1.PNG", "img2.PNG", "img3.PNG", "img4.PNG"];

function chooseImg() {
  const chosenImage1 = images[Math.floor(Math.random() * images.length)];
  const chosenImage2 = images[Math.floor(Math.random() * images.length)];

  if (chosenImage1 == chosenImage2) {
    chooseImg();
  } else {
    box1.style.backgroundImage = `url(img/${chosenImage1})`;
    box2.style.backgroundImage = `url(img/${chosenImage2})`;
  }
}

chooseImg();
