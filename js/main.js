const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const pages = document.querySelectorAll(".page");
const submitBtn = document.querySelector(".submit");
const pageCounter = document.querySelector(".page-counter");

let currentIndex = 0;

const showQuestion = (index) => {

  pages.forEach((page, i) => {
    page.classList.remove("show");

    if (i === index) {
      page.classList.add("show");
    }
  });

  prevBtn.style.display = index === 0 ? 'none' : 'inline-block'; 
  nextBtn.style.display = index === pages.length - 1 ? 'none' : 'inline-block'; 

};
 
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    showQuestion(currentIndex);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < pages.length - 1) {
    currentIndex++;
    showQuestion(currentIndex);
  }
});

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  let score = 0;

  // Loop through all questions and check selected answers
  pages.forEach((page) => {
    if (page.value === "C") { 
      score++; // Correct answer
    }
  });
  // Show result
  alert("Your score is " + score + " out of " + pages.length);
});

showQuestion(currentIndex);
