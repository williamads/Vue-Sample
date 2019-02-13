<template>
    <v-container v-if="isAuthenticated" id="bitcoin" fluid fill-height  class="teal darken-3 darken-2 home-hero" style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black white--text text-xs-center">BITCOIN</div>
                <p> {{ info }} </p>
        </v-layout>
    </v-container>
    <home-public v-else/>
</template>


<script>
import HomePublic from '@/components/HomePublic';

export default {
    name: 'Bitcoin',
    el: '#bitcoin',
    data (){
        return{
            info: null
        }
    },
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },
    mounted(){
        this.$store.getters.getBitcoinInfo.then(response => (this.info = response))
    }
};
</script>
