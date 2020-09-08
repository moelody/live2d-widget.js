
import { config } from "root/config/configMgr";
import { updateModel, tipList } from "root/cLive2DApp";
import { showMessage } from "root/dialog2";

function loadOtherTextures(id, msg) {

  id = Number(localStorage.getItem("texturesId")) + 1;
  updateModel(id || 1);
  id += Number(localStorage.getItem("texturesId"));
  msg = tipList && tipList.waifu && tipList.waifu.load_textures_message || [];

  showMessage(id == 1 ? (msg[0] || "我还没有其他衣服呢!") : (msg[1] || "我的新衣服好看嘛?"), 4000, 9);

}

module.exports = {
  loadOtherTextures,
};
