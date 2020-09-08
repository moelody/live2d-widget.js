import { config } from '../config/configMgr';
import { showMessage } from '../dialog2';
import { tipList } from "../cLive2DApp";
import { L2Dwidget } from '../index';
import { showHitokoto } from './message/Hitokoto';
import { asteroids } from './game/asteroids';
import { capture } from './capture';
import { toggleDisplay } from './toggle';
import { loadOtherModel } from './load/model';
import { loadOtherTextures } from './load/texture';

const scale = config.display.width / 250;
const toolStyle = document.createElement('style');
toolStyle.innerHTML = `
#live2d-widget-tool {
	color: #aaa;
	opacity: 0;
	position: absolute;
	${config.tool.position}: -20px;
  top: ${config.tool.top};
  transition: opacity 1s;
  transform-origin: top;
}
#live2d-widget:hover #live2d-widget-tool {
	opacity: 1;
}
#live2d-widget-tool span {
	color: ${config.tool.color};
	cursor: pointer;
	display: block;
	line-height: 30px;
	text-align: center;
	transition: color .3s;
}
#live2d-widget-tool span:hover {
	color: ${config.tool.colorHover};
}
`;
document.head.appendChild(toolStyle);

let containerElement,toolElement,closeTimer;

/**
 * 创建对话框元素
 * @param {HTMLElement} root 位置
 */
function createToolElement(root) {
  containerElement = document.createElement('div');
  containerElement.id = 'live2d-widget-tool';
  containerElement.style.transform = `scale(${scale})`;

  if (config.dialog.enable && config.tool.hitokoto.enable) {
    toolElement = document.createElement('span');
    toolElement.className = 'fas fa-comment fa-lg';
    toolElement.addEventListener('click', showHitokoto);
    containerElement.appendChild(toolElement);
  }

  if (config.tool.plane) {
    toolElement = document.createElement('span');
    toolElement.className = 'fas fa-paper-plane fa-lg';
    toolElement.addEventListener('click', asteroids);
    containerElement.appendChild(toolElement);
  }

  if (config.tool.camera) {
    toolElement = document.createElement('span');
    toolElement.className = 'fas fa-camera-retro fa-lg';
    toolElement.addEventListener('click', capture);
    containerElement.appendChild(toolElement);
  }

  if (config.tool.model) {
    toolElement = document.createElement('span');
    toolElement.className = 'fas fa-user-circle fa-lg';
    toolElement.addEventListener('click', loadOtherModel);
    containerElement.appendChild(toolElement);
  }
  if (config.tool.texture) {
    toolElement = document.createElement('span');
    toolElement.className = 'fas fa-street-view fa-lg';
    toolElement.addEventListener('click', loadOtherTextures);
    containerElement.appendChild(toolElement);
  }

  toolElement = document.createElement('span');
  toolElement.className = 'fas fa-info-circle fa-lg';
  toolElement.addEventListener('click', () => {
    open("https://github.com/moelody/live2d-widget.js");
  });
  containerElement.appendChild(toolElement);

  toolElement = document.createElement('span');
  toolElement.className = 'fas fa-times fa-lg';
  toolElement.addEventListener('click', toggleDisplay);
  containerElement.appendChild(toolElement);

  root.appendChild(containerElement);

  L2Dwidget.emit('create-tool', containerElement);

}

module.exports = {
  createToolElement
};
