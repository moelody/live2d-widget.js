function asteroids() {
  if (window.Asteroids) {
    if (!window.ASTEROIDSPLAYERS) window.ASTEROIDSPLAYERS = [];
    window.ASTEROIDSPLAYERS.push(new Asteroids());
  } else {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/gh/stevenjoezhang/asteroids/asteroids.js";
    document.head.appendChild(script);
  }
}

module.exports = {
  asteroids
}
