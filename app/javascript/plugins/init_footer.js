const initFooter = () => {
  const logoAddress = document.querySelector('#address > img');
  const address = document.querySelector('.ad-content > p');

  const logoEmail = document.querySelector('#email > img');
  const email = document.querySelector('.mail-content > p');

  logoAddress.addEventListener('click', () => {
    // alert("Hello! I am an alert box!!");
    address.target.style.display = "block";
    // address.target.style.display = "block";
  })

  logoEmail.addEventListener('mouseover', () => {
    // alert("Hello! I am an alert box!!");
    // address.target.style.display = "block";
  })
  // const address = document.getElementById('ad');


  // logoAddress.addEventListener('mouseover', () => {
  //   address.target.style.display = "block";

  // })
}

export { initFooter };