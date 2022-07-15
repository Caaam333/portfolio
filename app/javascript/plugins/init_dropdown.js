const initDropdown = () => {
  const mobileBtn = document.querySelector('.mobile-nav')
  const menuBtn = document.querySelector('.menu')
  const croixBtn = document.querySelector('.croix')
  const navList = document.querySelector('.nav-list')

  // mobileBtn.addEventListener('click', () => {

  //   if (menuBtn.style.display === "none") {
  //     menuBtn.style.display = "flex";
  //     croixBtn.style.display = "none";
  //   } else {
  //     menuBtn.style.display = "none";
  //     croixBtn.style.display = "flex";
  //   }
  // })

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle("nav-open")
    croixBtn.classList.toggle("nav-open") 
    navList.style.display = "flex";
  })
  
  croixBtn.addEventListener('click', () => {
    croixBtn.classList.toggle("nav-open")
    menuBtn.classList.toggle("nav-open")
    navList.style.display = "none";
  })
  
  // if (menuBtn.classList.contains("nav-open")) {
  //   console.log("c'est flex")
  // }
  
  
  
  // // if (menuBtn.style.display === "none") {
  //   // menuBtn.classList.toggle("opacity")
  //   
  //   // croixBtn.classList.toggle("opacity")
  //   
  // // } else {
  //   menuBtn.classList.toggle("nav-open")
  //   croixBtn.style.display = "flex";
  // }
  // if (menuBtn.style.display === "flex") {
  //   // navList.style.display = "none";
  //   console.log("menuBTN flex")
  // } else {
  //   // navList.style.display = "flex";
  //   console.log("menuBTN none")
  // }

}







export { initDropdown };