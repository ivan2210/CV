const header = document.querySelector("header");
const topSection = document.querySelector(".intro");
const midSection = document.querySelector(".mid-section");

const topSectionOptions = {
  rootMargin: "-90px 0px 0px 0px"
};

const midSectionOptions = {
  rootMargin: "-90px 0px 0px 0px"
};

const topSectionObserver = new IntersectionObserver
(function(
  entries,
  topSectionObserver
) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        header.classList.add("nav-scrolled");
      } else {
        header.classList.remove("nav-scrolled");
      }
    })
}, topSectionOptions);

const midSectionObserver = new IntersectionObserver
(function(
  entries,
  midSectionObserver
) {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        midSection.classList.remove("hidden");
      } else {
        midSection.classList.add("hidden");
      }
    })
}, midSectionOptions);

topSectionObserver.observe(topSection);
midSectionObserver.observe(midSection);
