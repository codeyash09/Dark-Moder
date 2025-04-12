let button = document.querySelector("button");
let darkMode = false;

button.addEventListener('click', toggleMode);

function toggleMode() {
  document.querySelectorAll('.car').forEach(function(car) {
    car.classList.toggle('dark');
  });
  document.querySelectorAll('.bun').forEach(function(bun) {
    bun.classList.toggle('dark');
  });

  
  document.body.classList.toggle('dark');

  

  document.querySelector('nav').classList.toggle('dark');


  darkMode = !darkMode;
  button.classList.toggle('dark');
  if(darkMode){
    button.innerHTML = "Light Mode";
    
  } else {
    button.innerHTML = "Dark Mode";
    
  }
  
}

function saveSettings(){
  localStorage.setItem('darkmode', darkMode);
}

function loadSettings(){
  if(localStorage.getItem('darkmode') === 'true'){
    toggleMode();
  }
  
}

window.addEventListener('beforeunload', saveSettings);

document.addEventListener('DOMContentLoaded', loadSettings);