const img = [
    {
        url_img: "01.webp",
        titolo: "Miles Morales",
        descrizione: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus officiis iure dolore consequatur.",
    },
    {
        url_img: "02.webp",
        titolo: "Ratchet & Clank",
        descrizione: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus officiis iure dolore consequatur.",
    },
    {
        url_img: "03.webp",
        titolo: "Fortnait",
        descrizione: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus officiis iure dolore consequatur.",
    },
    {
        url_img: "04.webp",
        titolo: "Stray",
        descrizione: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus officiis iure dolore consequatur.",
    },
    {
        url_img: "05.webp",
        titolo: "Avengers",
        descrizione: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus officiis iure dolore consequatur.",
    }
]

const layout = document.querySelector(".wrapper")


for (let key in img) {
    layout.innerHTML +=
        `
        <div class="box off">
        <img class="image" src="img/${img[key].url_img}" alt="">
        <div class="title">${img[key].titolo}</div>
        <div class="description">${img[key].descrizione}</div>
        </div>
        `
}

const curImg = document.querySelectorAll(".off")

let currentIndex = 0;

curImg[currentIndex].classList.add("active");

document.querySelector(".next").addEventListener("click", function () {

    curImg[currentIndex].classList.remove("active");

    // if (currentIndex < curImg.length - 1) {
    //     currentIndex++;
    // } else {
    //     currentIndex = 0;
    // }

    currentIndex < curImg.length - 1 ? currentIndex++ : currentIndex = 0;

    curImg[currentIndex].classList.add("active");
});

document.querySelector(".prev").addEventListener("click", function () {

    curImg[currentIndex].classList.remove("active");

    // if (currentIndex > 0) {
    //     currentIndex--;
    // } else {
    //     currentIndex = curImg.length - 1;
    // }

    currentIndex > 0 ? currentIndex-- : currentIndex = curImg.length - 1;

    curImg[currentIndex].classList.add("active");
})