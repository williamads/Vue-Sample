<template>
    <v-container fluid fill-height  class="teal darken-3 darken-2 home-hero" style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-5>
            <div v-if="isAuthenticated" class="display-3 font-weight-black white--text text-xs-center mb-3">Sucesso!</div>
            <div v-else class="display-1 font-weight-bold white--text text-xs-center">Tente novamente!</div>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Sucesso',
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    }
    
};
</script>