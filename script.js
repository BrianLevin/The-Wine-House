let counter1 = 0;
let counter2 = 1;
let bool = true;

window.addEventListener("wheel", (e) => {
    const deltaY = e.deltaY > 0;
  
    if (deltaY) {
      counter1++;
      counter2++;
    } else {
      counter1--;
      counter2--;
    }

    const pageController = () => {
        bool = true;
        if (counter1 === 5) {
          Array.from(sections).forEach((section) => {
            section.style.left = "0";
          });
          counter1 = 0;
          counter2 = 1;
          section1wrapper.style.transform = "scale(1)";
          section5wrapper.style.transform = "scale(1.5)";
          progressCounter();
          bool = false;
        }

        if (counter1 === -1) {
            Array.from(sections).forEach((section) => {
              if (section.classList[0] === "section-5") {
                return;
              }
              section.style.left = "-100vw";
            });
            counter1 = 4;
            counter2 = 5;
            section1wrapper.style.transform = "scale(1.5)";
            section5wrapper.style.transform = "scale(1)";
            progressCounter();
            bool = false;
          }
          progressCounter();
          return bool;
        };