<template>
    <v-container fluid fill-height  class="teal darken-3 darken-2 home-hero" style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-5>
            <div v-if="isAuthenticated" class="display-3 font-weight-black white--text text-xs-center mb-3">Um novo componente autenticado</div>
            <div v-if="!isAuthenticated" class="display-1 font-weight-bold white--text text-xs-center">Um novo componente NAO autenticado</div>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeComponente',
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    }
};
</script>

<style scoped>
.home-hero{
    width: 100%;
    height: 100%;
}
</style>