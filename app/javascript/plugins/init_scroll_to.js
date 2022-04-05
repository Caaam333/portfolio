const initScrollTo = () => {
  const scrollBtn = document.querySelector(".about-btn")
  const scrollEnd = document.querySelector(".first-part")
  
  scrollBtn.addEventListener('click', () => {
    // window.scrollTo({
    //   top: 900,
    //   behavior: "smooth"
    // })
    scrollEnd.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  })
}

export { initScrollTo };