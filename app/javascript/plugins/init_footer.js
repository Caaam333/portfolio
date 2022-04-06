const initFooter = () => {
  const logoAddress = document.querySelector('#address > img');
  const address = document.querySelector('.ad-content > p');

  const logoEmail = document.querySelector('#email > img');
  const email = document.querySelector('.mail-content > p');

  address.style.display = "none";
  email.style.display = "none";
  
  logoAddress.addEventListener('mouseover', () => {
    address.style.display = "block";
  })
  logoAddress.addEventListener('click', () => {
    address.style.display = "block";
  })
  logoAddress.addEventListener('mouseleave', () => {
    address.style.display = "none";
  })

  logoEmail.addEventListener('mouseover', () => {
    email.style.display = "block";
  })
  logoEmail.addEventListener('click', () => {
    email.style.display = "block";
  })

  // logoEmail.addEventListener('mouseleave', () => {
  //   email.style.display = "none";
  // })
}

// const adBlock = () => {
//   address.style.display = "block";
// }
// const adNone =  () => {
//   address.style.display = "none";
// }
// const emBlock = () => {
//   email.style.display = "block";
// }
// const emNone =  () => {
//   email.style.display = "none";
// }

export { initFooter };