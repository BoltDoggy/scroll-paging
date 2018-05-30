export function getWindowHeight() {
    // screen.height 为屏幕视窗高度
    return document.documentElement.clientHeight;
}

// https://github.com/jquery/jquery/blob/2d4f53416e5f74fa98e0c1d66b6f3c285a12f0ce/src/dimensions.js
// line 31 - 41
export function getDocumentHight(argument) {
    return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        // document.body.clientHeight 对这里存在异议，暂时使用 jquery 方案
        document.documentElement.clientHeight
    );
}

// http://www.genshuixue.com/i-cxy/p/7683723
export function getScrollTop() {
    return window.pageYOffset || document.documentElement.scrollTop;
}
