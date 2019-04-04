import Logo from './logos';

console.log("Main js file");


// Canvas element for logos animation
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const container = canvas.parentElement;

canvas.width = container.offsetWidth;
canvas.height = container.offsetHeight;

const logo_urls = [
  "https://sellthatwine.com/portfolio/images/logos/Css3.png",
  "https://sellthatwine.com/portfolio/images/logos/Javascript.png",
  "https://sellthatwine.com/portfolio/images/logos/Html5.png",
  "https://sellthatwine.com/portfolio/images/logos/Jquery.png",
  "https://sellthatwine.com/portfolio/images/logos/Laravel.png",
  "https://sellthatwine.com/portfolio/images/logos/Node.png",
  "https://sellthatwine.com/portfolio/images/logos/Sass.png",
  "https://sellthatwine.com/portfolio/images/logos/Mysql.png",
  "https://sellthatwine.com/portfolio/images/logos/Vuejs.png",
  "https://sellthatwine.com/portfolio/images/logos/Php.png",
  "https://sellthatwine.com/portfolio/images/logos/React.png"
];

const logos = [];

logo_urls.map((source, i) => {
  let scale = Math.random();
  let logo = new Logo(source, scale);
  logos.push(logo);
});

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  logos.map((logo, i) => {
    logo.draw(ctx);
    logo.update();
  });

  requestAnimationFrame(loop);
}

loop();