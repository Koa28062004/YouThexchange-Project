import { useEffect } from "react";
function Run() {
  useEffect(() => {
    const gallery = document.querySelector(".gallery");
    let currentIndex = 0;
    let next = document.querySelector(".next_btn");
    let pre = document.querySelector(".pre_btn");
    let timer;
    let slides = document.querySelectorAll(".slide"); 
    let maxIndex = slides.length-1;
    function slideImage(direction) {
      currentIndex += direction;
      var translateValue = -currentIndex * (100 / (maxIndex + 1));
      gallery.style.transform = `translateX(${translateValue}%)`;
      gallery.style.transition = "transform 0.5s ease-in-out";
    }

    gallery.addEventListener("transitionend", () => {
      if (currentIndex >= maxIndex) {
        slides = document.querySelectorAll(".slide");
        currentIndex = 1;
        gallery.style.transition = "none";
        var translateValue = -currentIndex * (100 / (maxIndex + 1));
        gallery.style.transform = `translateX(${translateValue}%)`;
      }
      if (currentIndex <= 0) {
        slides = document.querySelectorAll(".slide");
        currentIndex = maxIndex-1;
        gallery.style.transition = "none";
        translateValue = -currentIndex * (100 / (maxIndex + 1));
        gallery.style.transform = `translateX(${translateValue}%)`;
      }
    });

    function startTimer() {
      timer = setTimeout(function () {
        slideImage(1); 
        startTimer(); 
      }, 5000);
    }

    function resetTimer() {
      clearTimeout(timer);
      startTimer();
    }

    startTimer();

    next.addEventListener("click", () => slideImage(1));
    next.addEventListener("click", () => resetTimer());
    pre.addEventListener("click", () => slideImage(-1));
    pre.addEventListener("click", () => resetTimer());
  }, []);

  // Slide end
  return null;
}

export default Run;
