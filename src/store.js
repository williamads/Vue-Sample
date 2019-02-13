import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from '@/router';

import VuexPersistence from 'vuex-persist'

Vue.use(Vuex);

const bitcoinApi = 'https://api.coindesk.com/v1/bpi/currentprice.json';
//const githubApi = 'https://api.github.com/users/williamads/repos';

const bitcoinClient = axios.create({
    baseURL: bitcoinApi
})

//const githubClient = axios.create({
//    baseURL: githubApi
//})

export default new Vuex.Store({
    state: {
        isAuthenticated: false,
    },
    plugins: [new VuexPersistence().plugin],
    mutations: {
        setIsAuthenticated(state, payload) {
            state.isAuthenticated = payload;
        },
        setRepositories(state, payload){
            state.repositories = payload;
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
        },
        getRespositories({ commit }){
            const baseURI = 'https://api.github.com/users/williamads/repos'
            axios.get(baseURI)
                .then(response => {
                    commit('setRepositories', response.data)
                })
                .catch(() => {
                    commit('setRepositories', []);
                })
        }
    },
    getters: {
        isAuthenticated(state) {
            return state.isAuthenticated;
        },
        getBitcoinInfo(){
            return bitcoinClient.get();
        },
        //getRepos(){
        //    return githubClient.get();
        //}
    }
});