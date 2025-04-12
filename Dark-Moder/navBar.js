function navToggle(that) {
  for (const child of that.children) {
    child.classList.toggle('show');
  }
  let navbar = that.parentNode;
  navbar.classList.toggle('show');


  let body = document.querySelector('.article');
  body.classList.toggle('show');
}