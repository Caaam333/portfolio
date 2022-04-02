const initScrollTo = () => {
  const scrollBtn = document.querySelector(".about-btn")

  
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 900,
      behavior: "smooth"
    })
  })


}

export { initScrollTo };