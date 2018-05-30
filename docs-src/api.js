const totalpage = ~~(Math.random() * 20);

export const getPage = (pagination = 1, quantity = 10) => {
    console.warn(`模拟网络请求中... pagination=${pagination} quantity=${quantity}`);

    return new Promise((resolve) => {
        const timeout = Math.random() * 3000;

        setTimeout(() => {
            const mock = {
                pagination,
                totalpage,
                items: new Array(quantity).fill(pagination)
            };
            console.warn(`模拟网络请求成功`, mock);
            resolve(mock);
        }, timeout);
    });
};
