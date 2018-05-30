import {
    getWindowHeight,
    getDocumentHight,
    getScrollTop
} from './util';

const ex = () => {
    // 浏览器窗口可视高度
    let windowHeight = getWindowHeight();
    // 文档高度
    let documentHeight = getDocumentHight();
    // 滚动条总高度
    let scrollHeight = documentHeight - windowHeight;
    // windows.scrollY 滚动条垂直滚动高度
    let scrollTop = getScrollTop();
    // ? 滚动条距离底部小于一个屏幕
    return scrollHeight - scrollTop < windowHeight;
}

const ScrollPaing = () => {
    // 主程序
    let main = null;
    // 锁
    let lock = false;
    // 当前页码
    let currentPage = 0;

    let scrollPaging = (callback) => {
        scrollPaging.destroy();

        main = () => {
            // 没有上锁
            if (!lock && ex()) {
                // 网络请求发出前，执行上锁
                scrollPaging.lock();
                // 下一页页码
                let nextPage = currentPage + 1;
                callback(nextPage, () => {
                    scrollPaging.unlock();
                    currentPage = nextPage;
                    main();
                });
            }
        };

        /**
         * 监听事件
         */
        window.addEventListener('scroll', main);

        main();
    };

    /**
     * 释放事件
     */
    scrollPaging.destroy = () => {
        if (main) {
            window.removeEventListener('scroll', main);
        }
        scrollPaging.unlock();
    };

    /**
     * 上锁
     */
    scrollPaging.lock = () => {
        lock = true;
    };

    /**
     * 解锁
     */
    scrollPaging.unlock = () => {
        lock = false;
    };

    return scrollPaging;
};

export default (callback) => {
    const scrollPaging = ScrollPaing();

    scrollPaging(callback);

    return scrollPaging;
};
