import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from '@/router';

import VuexPersistence from 'vuex-persist'

Vue.use(Vuex);

const bitcoinApi = 'https://api.coindesk.com/v1/bpi/currentprice.json';

const bitcoinClient = axios.create({
    baseURL: bitcoinApi
})

export default new Vuex.Store({
    state: {
        isAuthenticated: false,
    },
    plugins: [new VuexPersistence().plugin],
    mutations: {
        setIsAuthenticated(state, payload) {
            state.isAuthenticated = payload;
        }
    },
    actions: {
        userLogin({ commit }, { email, password }) {

            if(email == "admin@admin.com" && password == 123456){
                commit('setIsAuthenticated', true);
                router.push('/');
            }
        },
        userSignOut({ commit }) {
            commit('setIsAuthenticated', false);
            router.push('/');
        }
    },
    getters: {
        isAuthenticated(state) {
            return state.isAuthenticated;
        },
        getBitcoinInfo(){
            return bitcoinClient.get();
        }
    }
});