
// const canvas = document.getElementById("fireworks");
// const ctx = canvas.getContext("2d");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const particles = [];
// const sound = new Audio("firecracker.mp3");

// function createParticle(x, y) {
//   const colors = ["#ff3", "#f06", "#6cf", "#f93", "#fff"];
//   for (let i = 0; i < 30; i++) {
//     particles.push({
//       x: x,
//       y: y,
//       radius: Math.random() * 2 + 1,
//       color: colors[Math.floor(Math.random() * colors.length)],
      
//       speedX: Math.random() * 5 - 2.5,
//       speedY: Math.random() * 5 - 2.5,
//       alpha: 1
//     });
//   }

//   // Play firecracker sound
//   sound.currentTime = 0;
//   sound.play();
// }

// function animateParticles() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   particles.forEach((p, i) => {
//     p.x += p.speedX;
//     p.y += p.speedY;
//     p.alpha -= 0.01;
//     if (p.alpha <= 0) particles.splice(i, 1);

//     ctx.beginPath();
//     ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
//     ctx.fillStyle = 'rgba(${hexToRgb(p.color)},${p.alpha})';
//     ctx.fill();
//   });

//   requestAnimationFrame(animateParticles);
// }

// function hexToRgb(hex) {
//   let c = hex.substring(1);
//   if (c.length === 3) c = c.split("").map(x => x + x).join("");
//   const num = parseInt(c, 16);
//   return '${(num >> 16) & 255},${(num >> 8) & 255},${num & 255}';
// }

// setInterval(() => {
//   const x = Math.random() * canvas.width;
//   const y = Math.random() * canvas.height * 0.5;
//   createParticle(x, y);
// }, 1000);

// animateParticles();