import './bootstrap';
import { createApp } from "vue";
import Swal from "sweetalert2";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

// Register router
app.use(router);

app.mixin({
    data() {
        return {
            catchedError: null,
            invalidFeedbacks: {},
        };
    },
    methods: {
        thisIsFunctionName() {
            console.log('hello');
        },
    },
});

app.mount("#app");
