let cars = document.querySelectorAll('.car');

document.addEventListener('scroll', checkCars);
document.addEventListener('DOMContentLoaded', checkCars);

function checkCars(){
  cars.forEach(function(car){
    if(window.scrollY + window.innerHeight - 150 > car.offsetTop){
      car.classList.add('slide');
    }
    else {
      car.classList.remove('slide');
    }
  })
}

