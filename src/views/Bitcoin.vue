<template>
    <v-container id="bitcoin" fluid fill-height  class="teal darken-1 darken-2 home-hero" style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black white--text text-xs-center">BITCOIN</div>
            
            <div v-for="(currency, i) in info" v-bind:key=i class="display-1 font-weight-bold white--text text-xs-center">
                
                {{ currency.description }} : <span v-html="currency.symbol"></span> {{ currency.rate_float | currencydecimal }}

            </div>
        </v-layout>
    </v-container>
</template>

<script>

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
        this.$store.getters.getBitcoinInfo.then(response => (this.info = response.data.bpi))
    },
    filters: {
        currencydecimal (value) {
        return value.toFixed(2)
    }
}
};
</script>
