import "./styles.css";
let totalNoOfImages = 0;
let randomNumber = 0;

fetch(`https://picsum.photos/v2/list`)
  .then((response) => {
    return response.json();
  })
  .then((picsumPhotos) => {
    randomNumber = Math.floor(Math.random() * picsumPhotos.length);
    imageMount(picsumPhotos);
    totalNoOfImages = picsumPhotos;
  });

const imageMount = (picsumPhotos) => {
  for (let i = 0; i < picsumPhotos.length; i++) {
    const div = document.createElement("div");

    const photo = document.createElement("img");
    photo.src = picsumPhotos[i].download_url;
    const wrapper = document.querySelector(".image-wrapper");
    const span = document.createElement("span");
    span.textContent = picsumPhotos[i].author;
    const main = wrapper.appendChild(div);
    main.appendChild(span);
    main.appendChild(photo);
  }

  imageWrapper.style.transform = "translateX(" + -500 * randomNumber + "px)";
};

const imageWrapper = document.querySelector(".image-wrapper");
const previousButton = document.querySelector("#prevbtn");
const nextButton = document.querySelector("#nextbtn");

nextButton.addEventListener("click", () => {
  if (totalNoOfImages.length === randomNumber + 1) {
    randomNumber = 0;
    imageWrapper.style.transform = "translateX(" + -500 * randomNumber + "px)";
  } else {
    imageWrapper.style.transition = "transform 0.4s ease-in-out";
    randomNumber++;
    imageWrapper.style.transform = "translateX(" + -500 * randomNumber + "px)";
  }
});

previousButton.addEventListener("click", () => {
  if (randomNumber === 0) {
    imageWrapper.style.transition = "transform 0.4s ease-in-out";
    randomNumber = totalNoOfImages.length - 1;
    imageWrapper.style.transform = "translateX(" + -500 * randomNumber + "px)";
  } else {
    imageWrapper.style.transition = "transform 0.4s ease-in-out";
    randomNumber--;
    imageWrapper.style.transform = "translateX(" + -500 * randomNumber + "px)";
  }
});
