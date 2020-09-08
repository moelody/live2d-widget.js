import { config } from 'root/config/configMgr';
import { showMessage } from 'root/dialog2';

function showHitokoto() {
  // 增加 hitokoto.cn 的 API
  fetch("https://v1.hitokoto.cn/" + (config.tool.hitokoto.param))
    .then(response => response.json())
    .then(result => {
      const text = `这句一言来自 <span>「${result.from}」</span>，是 <span>${result.creator}</span> 在 hitokoto.cn 投稿的。`;
      showMessage(result.hitokoto, 6000, 9);
      setTimeout(() => {
        showMessage(text, 3000, 9);
      }, 3000);
    });
}

module.exports = {
  showHitokoto
};
