import { config } from 'root/config/configMgr';
import { modelList, loadModel, tipList } from "root/cLive2DApp";
import { showMessage } from 'root/dialog2';

function loadOtherModel(id, msg) {

  id = Number(localStorage.getItem("modelId")) + 1;
  loadModel(id || 1);
  msg = tipList && tipList.waifu && tipList.waifu.load_model_message;

  showMessage(modelList && modelList.messages[(id || 0) % modelList.models.length] || msg || "请多指教，ご主人様！", 4000, 9);

}

module.exports = {
  loadOtherModel
}
