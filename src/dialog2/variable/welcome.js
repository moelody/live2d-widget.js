import { tipList } from "root/cLive2DApp";
import { showMessage } from "../index";

function welcomeMessage() {
  sessionStorage.removeItem("waifu-text");

  let text,
    waifu = tipList && tipList.waifu || {},
    hourTips = waifu && waifu.hour_tips || {},
    referrerTips = waifu && waifu.referrer_message || {};
  if (location.pathname === "/") {
    // 如果是主页
    const now = new Date().getHours();
    if (now > 5 && now <= 7)
      text =
        hourTips["t5-7"] || "早上好！一日之计在于晨，美好的一天就要开始了。";
    else if (now > 7 && now <= 11)
      text =
        hourTips["t7-11"] || "上午好！工作顺利嘛，不要久坐，多起来走动走动哦！";
    else if (now > 11 && now <= 13)
      text = hourTips["t11-14"] || "中午了，工作了一个上午，现在是午餐时间！";
    else if (now > 13 && now <= 17)
      text = hourTips["t14-17"] || "午后很容易犯困呢，今天的运动目标完成了吗？";
    else if (now > 17 && now <= 19)
      text =
        hourTips["t17-19"] ||
        "傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红～";
    else if (now > 19 && now <= 21)
      text = hourTips["t19-21"] || "晚上好，今天过得怎么样？";
    else if (now > 21 && now <= 23)
      text = hourTips["t21-23"] || [
        "已经这么晚了呀，早点休息吧，晚安～",
        "深夜时要爱护眼睛呀！",
      ];
    else text = "你是夜猫子呀？这么晚还不睡觉，明天起的来嘛？";
  } else if (document.referrer !== "") {
    const referrer = new URL(document.referrer),
      domain = referrer.hostname.split(".")[1];
    if (location.hostname === referrer.hostname)
      text = referrerTips.localhost && (referrerTips.localhost[0] + document.title.split(referrerTips.localhost[2])[0] + referrerTips.localhost[1]) ||
      `欢迎阅读<span>「${document.title.split(" - ")[0]}」</span>`;
    else if (domain === "baidu")
      text = referrerTips.baidu && (referrerTips.baidu[0] + referrer.search.split("&wd=")[1].split("&")[0] + referrerTips.baidu[1]) ||
      `Hello！来自 百度搜索 的朋友<br>你是搜索 <span>${
        referrer.search.split("&wd=")[1].split("&")[0]
      }</span> 找到的我吗？`;
    else if (domain === "so")
      text = referrerTips.so && (referrerTips.so[0] + referrer.search.split("&wd=")[1].split("&")[0] + referrerTips.so[1]) ||
      `Hello！来自 360搜索 的朋友<br>你是搜索 <span>${
        referrer.search.split("&q=")[1].split("&")[0]
      }</span> 找到的我吗？`;
    else if (domain === "google")
      text = referrerTips.google && (referrerTips.google[0] + referrer.search.split("&wd=")[1].split("&")[0] + referrerTips.google[1]) ||
      `Hello！来自 谷歌搜索 的朋友<br>欢迎阅读<span>「${
        document.title.split(" - ")[0]
      }」</span>`;
    else text = referrerTips.default && (referrerTips.default[0] + referrer.search.split("&wd=")[1].split("&")[0] + referrerTips.default[1]) ||
    `Hello！来自 <span>${referrer.hostname}</span> 的朋友`;
  } else {
    text = referrerTips.none && (referrerTips.none[0] + document.title.split(referrerTips.none[2])[0] + referrerTips.none[1]) ||
    `欢迎阅读<span>「${document.title.split(" - ")[0]}」</span>`;
  }
  showMessage(text, 7000, 8);
}

module.exports = {
  welcomeMessage,
};
