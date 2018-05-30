<template>
    <div>
        <div v-for="(item, index) in list" :key="index">
            {{ index }}: {{ item }}
        </div>
        <div v-if="loading">loading...</div>
    </div>
</template>

<script>
import scrollPaging from '../src/index.js';

import {
    getPage
} from './api.js';


export default {
    data() {
        return {
            list: [],
            loading: true
        };
    },
    mounted() {
        /**
         * 调用滚动分页
         * 传入回调函数，如果页面滚动距底部还差一屏，调用回调
         */
        scrollPaging((index, next) => {
            getPage(index).then((data) => {
                this.list = this.list.concat(data.items);

                if (index < data.totalpage) {
                    next();
                } else {
                    this.loading = false;
                }
            });
        });
    }
};
</script>
