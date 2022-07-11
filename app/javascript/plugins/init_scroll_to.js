const initScrollTo = () => {
  const aboutBtn = document.querySelector(".about-btn")
  const aboutBtnSvg = document.querySelector(".about-btn-svg")
  const aboutEnd = document.querySelector(".first-part")
  
  const cvBtn = document.querySelector(".cv-scroll")
  const cvEnd = document.querySelector(".cv")

  const contactBtn = document.querySelector(".contact-btn")
  const contactEnd = document.querySelector(".contact-list")

  aboutBtn.addEventListener('click', () => {
    aboutEnd.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"} + 100);
  })

  aboutBtnSvg.addEventListener('click', () => {
    aboutEnd.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  })

  cvBtn.addEventListener('click', () => {
    cvEnd.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  })

  contactBtn.addEventListener('click', () => {
    contactEnd.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  })

}

export { initScrollTo };