import { config } from '../config/configMgr';
import { ScriptEngine } from './script';
import { L2Dwidget } from '../index';
import { everyEmitter } from './emitter/every';
import { hoverEmitter } from './emitter/hover';
import { tapbodyEmitter } from './emitter/tapbody';
import { tapfaceEmitter } from './emitter/tapface';
import { hitokotoVariable } from './variable/hitokoto';
import { welcomeMessage } from './variable/welcome';
import { idleMessage } from './variable/active';
import { randomSelection } from '../utils/polyfill';

import style from './styles/waifu';

const dialogStyle = document.createElement('style');
dialogStyle.innerHTML = style;
document.head.appendChild(dialogStyle);

let containerElement,dialogElement,closeTimer;

/**
 * 显示对话框
 * @example
 */
export function displayDialog() {
  containerElement.classList.add("live2d-widget-dialog-active");
}

/**
 * 隐藏对话框
 * @example
 */
export function hiddenDialog() {
  containerElement.classList.remove("live2d-widget-dialog-active");
}

/**
 * 显示输入的信息
 * @param {String} text
 * @param {Number} timeout
 * @param {Number} priority
 * @example
 */
export function showMessage(text, timeout, priority) {
  if (!config.dialog.enable) return;
  if (!text || (sessionStorage.getItem("waifu-text") && sessionStorage.getItem("waifu-text") > priority)) return;
  if (closeTimer) {
    clearTimeout(closeTimer);
    closeTimer = null;
  }
  text = randomSelection(text);
  sessionStorage.setItem("waifu-text", priority || 3);
  dialogElement.innerHTML = text;
  displayDialog();
  closeTimer = setTimeout(function () {
    hiddenDialog();
  }, timeout || 5000);
}

/**
 * 创建对话框元素
 * @param {HTMLElement} root 位置
 */
export function createDialogElement(root) {
  containerElement = document.createElement('div');
  containerElement.className = 'live2d-widget-dialog-container';
  // containerElement.style.transform = `scale(${config.display.width / 250})`;
  dialogElement = document.createElement('div');
  dialogElement.className = 'live2d-widget-dialog';
  containerElement.appendChild(dialogElement);
  root.appendChild(containerElement);

  L2Dwidget.emit('create-dialog', containerElement);

  if (config.dialog.script) {
    const scriptEngine = new ScriptEngine(showMessage);
    scriptEngine.registerEmitter('every', everyEmitter(scriptEngine));
    scriptEngine.registerEmitter('hover', hoverEmitter());
    scriptEngine.registerEmitter('tap body', tapbodyEmitter(L2Dwidget));
    scriptEngine.registerEmitter('tap face', tapfaceEmitter(L2Dwidget));

    scriptEngine.registerVariable('hitokoto', hitokotoVariable);
    Object.keys(config.dialog.script).forEach(key => {
      scriptEngine.run(key, config.dialog.script[key]);
    });
  }
}

/**
 * 注册tips绑定事件
 * @example
 */
export function registerTipsEventListener(tips) {
  const waifu = tips && tips.waifu,
    mouseover = tips && tips.mouseover || [],
    click = tips && tips.click || [],
    seasons = tips && tips.seasons || [],
    devtools = () => {};
  devtools.toString = () => {
    showMessage(waifu && waifu.console_open_msg || "哈哈，你打开了控制台，是想要看看我的小秘密吗？", 6000, 9);
  };
  console.log("%c", devtools);
  window.addEventListener("copy", () => {
    showMessage(waifu && waifu.copy_message || "你都复制了些什么呀，转载要记得加上出处哦！", 6000, 9);
  });
  window.addEventListener("visibilitychange", () => {
    if (!document.hidden) showMessage(waifu && waifu.visible_message || "哇，你终于回来了～", 6000, 9);
  });
  welcomeMessage();
  idleMessage();
  window.addEventListener("mouseover", event => {
    for (let script of mouseover) {
      if (!event.target.matches(script.selector)) continue;
      let text = randomSelection(script.text);
      text = text.replace("{text}", event.target.innerText);
      showMessage(text, 4000, 9);
      return;
    }
  });
  window.addEventListener("click", event => {
    for (let script of click) {
      if (!event.target.matches(script.selector)) continue;
      let text = randomSelection(script.text);
      text = text.replace("{text}", event.target.innerText);
      showMessage(text, 4000, 9);
      return;
    }
  });
  seasons.forEach(script => {
    let now = new Date(),
      after = script.date.split("-")[0],
      before = script.date.split("-")[1] || after;
    if ((after.split("/")[0] <= now.getMonth() + 1 && now.getMonth() + 1 <= before.split("/")[0]) && (after.split("/")[1] <= now.getDate() && now.getDate() <= before.split("/")[1])) {
      let text = randomSelection(script.text);
      text = text.replace("{year}", now.getFullYear());
      showMessage(text, 7000, true);
      waifu && waifu.idle_message && waifu.idle_message.push(text);
    }
  });
}
