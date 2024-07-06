"use strict";
gsap.registerPlugin(ScrollTrigger);

const marketingCollection = [
  {
    title: "slide 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue justo, feugiat ornare nunc sit amet, imperdiet laoreet lacus. Suspendisse imperdiet ultricies nisl.",
  },
  {
    title: "slide 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "slide 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue justo, feugiat ornare nunc sit amet, imperdiet laoreet lacus. Suspendisse imperdiet ultricies.",
  },
  {
    title: "slide 4",
    description:
      "Etiam imperdiet, dui vitae aliquet elementum, lectus urna vestibulum eros, id condimentum quam neque sed ligula. Nam consequat gravida turpis.",
  },
  {
    title: "slide 5",
    description: "",
  },
  {
    title: "",
    description:
      "Nunc egestas dapibus tellus ut ullamcorper. Maecenas id tellus ex. Pellentesque id dolor pulvinar lectus feugiat vehicula. Proin bibendum, felis eget eleifend convallis, velit nulla tempus neque, in sagittis dolor nisi non orci. Aliquam sit amet justo in diam tempor mattis vel non arcu. ",
  },
  {
    title:
      "Nunc egestas dapibus tellus ut ullamcorper. Maecenas id tellus ex. Pellentesque id dolor pulvinar lectus feugiat vehicula. Proin bibendum, felis eget eleifend convallis, velit nulla tempus neque, in sagittis dolor nisi non orci. Aliquam sit amet justo in diam tempor mattis vel non arcu. ",
    description: "Praesent iaculis auctor dolor.",
  },
  {
    title: "s",
    description: "",
  },
  {
    title: "d",
    description: "",
  },
  {
    title: "",
    description: "Etiam venenatis tempus",
  },
];

// Select the container element
const heroContainer = document.querySelector(".hero");

//hero shuffle, slide randoms and title logic
// Shuffle function
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Filter out items without a valid title and desc
const validItems = marketingCollection.filter(
  (item) => item.title && item.description
);

// Shuffle and get the first 3 items
shuffle(validItems);
const selectedItems = validItems.slice(0, 3);

// Helper function to truncate text without cutting words
function truncateText(text, maxChars) {
  if (text.length <= maxChars) return text;

  const truncated = text.slice(0, maxChars);
  const lastSpaceIndex = truncated.lastIndexOf(" ");

  // for the words to not be cut
  return (
    truncated.slice(0, lastSpaceIndex > 0 ? lastSpaceIndex : maxChars) + "..."
  );
}
const characterLimit = 20;
// end hero shuffle, slide randoms and title logic

heroContainer.innerHTML = "";

// Loop for the slides
selectedItems.forEach((item, index) => {
  const panel = document.createElement("div");
  panel.classList.add("hero__panel");

  const image = document.createElement("img");
  image.classList.add("hero__main-img");
  image.src = "./images/hero/hero-image.webp";
  image.alt = "";

  const title = document.createElement("div");
  title.classList.add("hero__title");
  title.textContent = item.title;
  title.textContent = truncateText(item.title, characterLimit); // Truncate title

  const desc = document.createElement("div");
  desc.classList.add("hero__desc");
  desc.textContent = item.description;

  // Create an arrow element for each slide
  const arrow = document.createElement("img");
  arrow.classList.add("hero__arrow");
  arrow.src = "./images/hero/arrow-down.svg";
  arrow.alt = "arrow";

  panel.appendChild(image);
  panel.appendChild(title);
  panel.appendChild(desc);
  panel.appendChild(arrow);
  heroContainer.appendChild(panel);
});
// end Loop for the slides

// Add click event listener to each arrow
document.querySelectorAll(".hero__arrow").forEach((arrow, index) => {
  arrow.addEventListener("click", () => {
    // Scroll smoothly to the next section
    const nextSection = document.getElementById("nextSection");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

//carousel scroller
const carouselScroller = [
  {
    title: "product title 1",
    imgMobile: "./images/carousel-scroller/carousel-scroller-mobile.webp",
    img: "./images/carousel-scroller/carousel-scroller.webp",
    arrow: "./images/carousel-scroller/arrow-left.svg",
  },
  {
    title: "product title 2",
    imgMobile: "./images/carousel-scroller/carousel-scroller-mobile.webp",
    img: "./images/carousel-scroller/carousel-scroller.webp",
    arrow: "./images/carousel-scroller/arrow-left.svg",
  },
  {
    title: "product title 3",
    imgMobile: "./images/carousel-scroller/carousel-scroller-mobile.webp",
    img: "./images/carousel-scroller/carousel-scroller.webp",
    arrow: "./images/carousel-scroller/arrow-left.svg",
  },
  {
    title: "product title 4",
    imgMobile: "./images/carousel-scroller/carousel-scroller-mobile.webp",
    img: "./images/carousel-scroller/carousel-scroller.webp",
    arrow: "./images/carousel-scroller/arrow-left.svg",
  },
  {
    title: "product title 5",
    imgMobile: "./images/carousel-scroller/carousel-scroller-mobile.webp",
    img: "./images/carousel-scroller/carousel-scroller.webp",
    arrow: "./images/carousel-scroller/arrow-left.svg",
  },
  {
    title: "product title 6",
    imgMobile: "./images/carousel-scroller/carousel-scroller-mobile.webp",
    img: "./images/carousel-scroller/carousel-scroller.webp",
    arrow: "./images/carousel-scroller/arrow-left.svg",
  },
  {
    title: "product title 7",
    imgMobile: "./images/carousel-scroller/carousel-scroller-mobile.webp",
    img: "./images/carousel-scroller/carousel-scroller.webp",
    arrow: "./images/carousel-scroller/arrow-left.svg",
  },
  {
    title: "product title 8",
    imgMobile: "./images/carousel-scroller/carousel-scroller-mobile.webp",
    img: "./images/carousel-scroller/carousel-scroller.webp",
    arrow: "./images/carousel-scroller/arrow-left.svg",
  },
  {
    title: "product title 9",
    imgMobile: "./images/carousel-scroller/carousel-scroller-mobile.webp",
    img: "./images/carousel-scroller/carousel-scroller.webp",
    arrow: "./images/carousel-scroller/arrow-left.svg",
  },
  {
    title: "product title 10",
    imgMobile: "./images/carousel-scroller/carousel-scroller-mobile.webp",
    img: "./images/carousel-scroller/carousel-scroller.webp",
    arrow: "./images/carousel-scroller/arrow-left.svg",
  },
];

// Function to render carousel items
function renderCarouselItems() {
  const container = document.getElementById("nextSection");

  carouselScroller.forEach((item) => {
    const carouselItem = document.createElement("div");
    carouselItem.className = "carousel-scroller__img";

    carouselItem.innerHTML = `
      <img class="carousel-scroller__img__child" src="${item.imgMobile}" alt="${item.title} Mobile" />
      <img class="carousel-scroller__img__child" src="${item.img}" alt="${item.title}" />
      <img class="carousel-scroller__img__arrow" src="${item.arrow}" alt="Arrow" />
      <div class="carousel-scroller__title">${item.title}</div>
    `;

    container.appendChild(carouselItem);
  });
}

// Initialize the carousel
renderCarouselItems();
//carousel scroller

// gsap slide animation
let sections = gsap.utils.toArray(".hero__panel"); // converting the items into an array

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1), //auto slide after a little scoll
    end: () => "+=" + document.querySelector(".hero").offsetWidth,
  },
});
// end gsap slide animation

gsap.to(".hero__arrow", {
  y: 20,
  ease: "power.out",
  yoyo: -1,
  duration: 0.7,
  yoyo: true,
  repeat: -1,
});
// end gsap slide animation
