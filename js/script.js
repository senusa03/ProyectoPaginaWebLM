window.addEventListener('scroll', function () {
    var izqElement = document.querySelector('.izq');
    var derElement = document.querySelector('.der');
    var izqPosition = izqElement.getBoundingClientRect().top;
    var derPosition = derElement.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;
  
    if (izqPosition < screenPosition) {
      izqElement.classList.add('show');
    }
  
    if (derPosition < screenPosition) {
      derElement.classList.add('show');
    }
  });

  