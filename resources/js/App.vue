<template>
    <div class="d-flex h-100">
        <router-view />
    </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
    data() {
        return {
            user: {},
        };
    },

    methods: {
        
    },
};
</script>