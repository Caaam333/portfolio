const initHide = () => {
  window.addEventListener('scroll', () => {
    const content = document.querySelector('.row');
    const content2 = document.querySelector('.row2');
    const contentPosition = content.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if(contentPosition < screenPosition) {
      content.classList.add('active');
      content2.classList.add('active');
    } else {
      content.classList.remove('active');
      content2.classList.remove('active');
    }
  })


}

export { initHide };