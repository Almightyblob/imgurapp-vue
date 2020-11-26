<template>
    <div class="flex justify-between px-10 py-3">
       <div>   
            Image Storage
        </div>
        <div>
            <a href="#" @click="login">
                login
            </a>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "AppHeader",
    methods: {
        ...mapActions(['login']),

        }
}

</script>

<style scoped>

</style>