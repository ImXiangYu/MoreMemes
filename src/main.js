// 运行在 Electron 主进程 下的插件入口


// 创建窗口时触发
const fs = require("fs");
const path = require("path");

exports.onBrowserWindowCreated = (window) => {
    const jsCode = fs.readFileSync(path.join(__dirname, "IconInject.js"), "utf-8");
    window.webContents.on("dom-ready", () => {
        window.webContents.executeJavaScript(jsCode);
    });
};



// 用户登录时触发
exports.onLogin = (uid) => {
    // uid 为 账号 的 字符串 标识
}