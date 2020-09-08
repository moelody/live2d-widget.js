import { config } from 'root/config/configMgr';
import { showMessage } from 'root/dialog2';
import { tipList } from 'root/cLive2DApp';
import { L2Dwidget } from 'root/index';

function capture(msg) {

  msg = tipList && tipList.waifu && tipList.waifu.screenshot_message;

  showMessage(msg || "照好了嘛，是不是很可爱呢？", 6000, 9);
  L2Dwidget.downloadFrame();

}

module.exports = {
  capture
}
