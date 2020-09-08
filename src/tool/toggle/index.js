import { config } from "root/config/configMgr";
import { showMessage } from "root/dialog2";
import { tipList } from "root/cLive2DApp";

function toggleDisplay(msg) {

  msg = (tipList && tipList.waifu && tipList.waifu.hidden_message);

  showMessage(msg || "愿你有一天能与重要的人重逢。", 2000, 11);
  setTimeout(() => {
    document.getElementById("waifu").style.display = "none";
  }, 3000);

}

module.exports = {
  toggleDisplay,
};
