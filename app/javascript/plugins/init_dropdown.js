const initDropdown = () => {
  const mobileBtn = document.querySelector('.mobile-nav')
  const menuBtn = document.querySelector('.menu')
  const croixBtn = document.querySelector('.croix')

  // mobileBtn.addEventListener('click', () => {

  //   if (menuBtn.style.display === "none") {
  //     menuBtn.style.display = "flex";
  //     croixBtn.style.display = "none";
  //   } else {
  //     menuBtn.style.display = "none";
  //     croixBtn.style.display = "flex";
  //   }
  // })

  mobileBtn.addEventListener('click', () => {

    // if (menuBtn.style.display === "none") {
      // menuBtn.classList.toggle("opacity")
      menuBtn.classList.toggle("nav-open")
      // croixBtn.classList.toggle("opacity")
      croixBtn.classList.toggle("nav-open")
    // } else {
    //   menuBtn.classList.toggle("nav-open")
    //   croixBtn.style.display = "flex";
    // }
  })
}







export { initDropdown };