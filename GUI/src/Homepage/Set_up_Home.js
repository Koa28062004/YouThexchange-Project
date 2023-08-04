import { useEffect } from "react";
function Run() {
  useEffect(() => {
    const gallery = document.querySelector(".gallery");
    let currentIndex = 0;
    let maxIndex = 5; // Số lượng ảnh trong dãy (từ 0 đến 5)
    let next = document.querySelector(".next_btn");
    let pre = document.querySelector(".pre_btn");
    let timer;
    let slides = document.querySelectorAll(".slide"); // value is never read ???

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
    });

    function startTimer() {
      timer = setTimeout(function () {
        slideImage(1); // Chuyển đến ảnh tiếp theo
        startTimer(); // Bắt đầu lại đếm thời gian
      }, 5000); // Đếm thời gian 5 giây
    }

    function resetTimer() {
      clearTimeout(timer);
      startTimer();
    }

    // Bắt đầu đếm thời gian khi trang web được tải
    startTimer();

    // Thiết lập sự kiện cho tương tác người dùng (ví dụ: click, hover, ...)
    next.addEventListener("click", () => slideImage(1));
    next.addEventListener("click", () => resetTimer());
    pre.addEventListener("click", () => slideImage(-1));
    pre.addEventListener("click", () => resetTimer());
  }, []);

  // Slide end
  return null;
}

export default Run;
