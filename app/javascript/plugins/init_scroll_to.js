const initScrollTo = () => {
  const aboutBtn = document.querySelector(".about-btn")
  const aboutEnd = document.querySelector(".first-part")
  
  const cvBtn = document.querySelector(".cv-scroll")
  const cvEnd = document.querySelector(".cv")

  aboutBtn.addEventListener('click', () => {
    // window.scrollTo({
    //   top: 900,
    //   behavior: "smooth"
    // })
    aboutEnd.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  })

  cvBtn.addEventListener('click', () => {
    // window.scrollTo({
    //   top: 900,
    //   behavior: "smooth"
    // })
    cvEnd.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  })
}

export { initScrollTo };