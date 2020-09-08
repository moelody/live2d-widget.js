
import { randomSelection } from 'root/utils/polyfill';
import { tipList } from 'root/cLive2DApp';
import { showMessage } from '../index';

// 检测用户活动状态，并在空闲时显示消息
function idleMessage(msg) {
  let userAction = false,
    userActionTimer,
    messageTimer;
  msg = tipList && tipList.waifu && tipList.waifu.idle_message;
  window.addEventListener("mousemove", () => userAction = true);
  window.addEventListener("keydown", () => userAction = true);
  setInterval(() => {
    if (userAction) {
      userAction = false;
      clearInterval(userActionTimer);
      userActionTimer = null;
    } else if (!userActionTimer) {
      userActionTimer = setInterval(() => {
        showMessage(randomSelection(msg || [
          "好久不见，日子过得好快呢……",
          "大坏蛋！你都多久没理人家了呀，嘤嘤嘤～",
          "嗨～快来逗我玩吧！",
          "拿小拳拳锤你胸口！",
          "记得把小家加入 Adblock 白名单哦！"
        ]), 6000, 9);
      }, 20000);
    }
  }, 1000);
}

module.exports = {
  idleMessage
}
