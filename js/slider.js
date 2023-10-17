var imgs = document.querySelectorAll('.slider img');
var dots = document.querySelectorAll('.dot');
var currentImg = 0; // Index of the first image

function changeSlide(n) {
  currentImg = (currentImg + n + imgs.length) % imgs.length;

  for (var i = 0; i < imgs.length; i++) {
    imgs[i].style.opacity = 0;
    dots[i].classList.remove('active');
  }

  imgs[currentImg].style.opacity = 1;
  dots[currentImg].classList.add('active');
}

// Trigger the first image to be displayed when the page loads
changeSlide(0);

// Update the navigation dots
dots.forEach(function(dot, index) {
  dot.addEventListener('click', function() {
    changeSlide(index - currentImg);
  });
});
