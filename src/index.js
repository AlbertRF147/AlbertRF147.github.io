import style from './main.scss';

// Hide navbar on scrolldown
var prevPosY = window.pageYOffset;
  
window.onscroll = () => {
  var currentPosY = window.pageYOffset;

  if (prevPosY < currentPosY) {
    document.getElementsByTagName('nav')[0].classList.add('navbar-hidden')
  } else {
    document.getElementsByTagName('nav')[0].classList.remove('navbar-hidden')
  }
  prevPosY = currentPosY;
}

// Project links
var projects = document.getElementsByClassName('project');

for (let i = 0; i < projects.length; i++) {
  const project = projects[i];
  let link = project.attributes.link.value;
  project.onclick = () => {
    window.open(link, '_blank');
  }
}