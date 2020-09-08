import { config } from 'root/config/configMgr';

const scale = config.display.width / 250;

module.exports = `
.live2d-widget-dialog-container {
  opacity: 0;
  bottom: ${config.dialog.bottom};
  right: 0px;
  ${config.tool.position=='right' ? 'left: 0px': ''};
  position: absolute;
  transform-origin: right;
  box-sizing: border-box;
	transition: opacity 1s;
  -webkit-font-smoothing: antialiased;
}
.live2d-widget-dialog {
  width: ${250 * scale}px;
  line-height: ${24* scale}px;
  min-height: ${70 * scale}px;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  font-size: ${16 * scale}px;
  padding: ${5* scale}px ${10* scale}px;
  border: ${config.dialog.border};
  background: ${config.dialog.background};
  border-radius: 12px;
  box-shadow: 0 3px 15px 2px rgba(191, 158, 118, .2);
  animation: shake 50s ease-in-out 5s infinite;
}
[data-theme=dark] .live2d-widget-dialog {
  border: ${config.dialog.borderDark};
  background: ${config.dialog.backgroundDark};
}
.live2d-widget-dialog span {
  color: #0099cc;
}
.live2d-widget-dialog-active {
  overflow: visible;
  text-overflow: inherit;
	opacity: 1;
	transition: opacity .2s;
}
@keyframes shake {
  2% {
    transform: translate(.5px, -1.5px) rotate(-.5deg);
  }

  4% {
    transform: translate(.5px, 1.5px) rotate(1.5deg);
  }

  6% {
    transform: translate(1.5px, 1.5px) rotate(1.5deg);
  }

  8% {
    transform: translate(2.5px, 1.5px) rotate(.5deg);
  }

  10% {
    transform: translate(.5px, 2.5px) rotate(.5deg);
  }

  12% {
    transform: translate(1.5px, 1.5px) rotate(.5deg);
  }

  14% {
    transform: translate(.5px, .5px) rotate(.5deg);
  }

  16% {
    transform: translate(-1.5px, -.5px) rotate(1.5deg);
  }

  18% {
    transform: translate(.5px, .5px) rotate(1.5deg);
  }

  20% {
    transform: translate(2.5px, 2.5px) rotate(1.5deg);
  }

  22% {
    transform: translate(.5px, -1.5px) rotate(1.5deg);
  }

  24% {
    transform: translate(-1.5px, 1.5px) rotate(-.5deg);
  }

  26% {
    transform: translate(1.5px, .5px) rotate(1.5deg);
  }

  28% {
    transform: translate(-.5px, -.5px) rotate(-.5deg);
  }

  30% {
    transform: translate(1.5px, -.5px) rotate(-.5deg);
  }

  32% {
    transform: translate(2.5px, -1.5px) rotate(1.5deg);
  }

  34% {
    transform: translate(2.5px, 2.5px) rotate(-.5deg);
  }

  36% {
    transform: translate(.5px, -1.5px) rotate(.5deg);
  }

  38% {
    transform: translate(2.5px, -.5px) rotate(-.5deg);
  }

  40% {
    transform: translate(-.5px, 2.5px) rotate(.5deg);
  }

  42% {
    transform: translate(-1.5px, 2.5px) rotate(.5deg);
  }

  44% {
    transform: translate(-1.5px, 1.5px) rotate(.5deg);
  }

  46% {
    transform: translate(1.5px, -.5px) rotate(-.5deg);
  }

  48% {
    transform: translate(2.5px, -.5px) rotate(.5deg);
  }

  50% {
    transform: translate(-1.5px, 1.5px) rotate(.5deg);
  }

  52% {
    transform: translate(-.5px, 1.5px) rotate(.5deg);
  }

  54% {
    transform: translate(-1.5px, 1.5px) rotate(.5deg);
  }

  56% {
    transform: translate(.5px, 2.5px) rotate(1.5deg);
  }

  58% {
    transform: translate(2.5px, 2.5px) rotate(.5deg);
  }

  60% {
    transform: translate(2.5px, -1.5px) rotate(1.5deg);
  }

  62% {
    transform: translate(-1.5px, .5px) rotate(1.5deg);
  }

  64% {
    transform: translate(-1.5px, 1.5px) rotate(1.5deg);
  }

  66% {
    transform: translate(.5px, 2.5px) rotate(1.5deg);
  }

  68% {
    transform: translate(2.5px, -1.5px) rotate(1.5deg);
  }

  70% {
    transform: translate(2.5px, 2.5px) rotate(.5deg);
  }

  72% {
    transform: translate(-.5px, -1.5px) rotate(1.5deg);
  }

  74% {
    transform: translate(-1.5px, 2.5px) rotate(1.5deg);
  }

  76% {
    transform: translate(-1.5px, 2.5px) rotate(1.5deg);
  }

  78% {
    transform: translate(-1.5px, 2.5px) rotate(.5deg);
  }

  80% {
    transform: translate(-1.5px, .5px) rotate(-.5deg);
  }

  82% {
    transform: translate(-1.5px, .5px) rotate(-.5deg);
  }

  84% {
    transform: translate(-.5px, .5px) rotate(1.5deg);
  }

  86% {
    transform: translate(2.5px, 1.5px) rotate(.5deg);
  }

  88% {
    transform: translate(-1.5px, .5px) rotate(1.5deg);
  }

  90% {
    transform: translate(-1.5px, -.5px) rotate(-.5deg);
  }

  92% {
    transform: translate(-1.5px, -1.5px) rotate(1.5deg);
  }

  94% {
    transform: translate(.5px, .5px) rotate(-.5deg);
  }

  96% {
    transform: translate(2.5px, -.5px) rotate(-.5deg);
  }

  98% {
    transform: translate(-1.5px, -1.5px) rotate(-.5deg);
  }

  0%, 100% {
    transform: translate(0, 0) rotate(0);
  }
}`;
