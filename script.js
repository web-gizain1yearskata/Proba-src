//функція для відкриття/закриття меню на мобільних пристроях
function toggleMenu() {
    const navList = document.getElementById("nav-list");
    navList.style.display = navList.style.display === "flex" ? "none" : "flex";
}

let slideIndex = 0;
showSlide(slideIndex);

// Функція для відображення попереднього слайду
function prevSlide() {
    showSlide(slideIndex -= 1);
}

// Функція для відображення наступного слайду
function nextSlide() {
    showSlide(slideIndex += 1);
}

// Функція для відображення слайда за певним індексом
function showSlide(index) {
    let slides = document.getElementsByClassName("slide");
    if (index >= slides.length) { slideIndex = 0; }
    if (index < 0) { slideIndex = slides.length - 1; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

// Автоматичне перелистування слайдів кожні 5 секунд
let slideInterval = setInterval(nextSlide, 5000);

// Зупинити автоматичне перелистування при наведенні миші на слайдер
document.querySelector(".slider-container").addEventListener("mouseenter", function() {
    clearInterval(slideInterval);
});

// Продовжити автоматичне перелистування після виходу миші зі слайдера
document.querySelector(".slider-container").addEventListener("mouseleave", function() {
    slideInterval = setInterval(nextSlide, 5000);
});

//Були іноді використанні додаткові джерела :)