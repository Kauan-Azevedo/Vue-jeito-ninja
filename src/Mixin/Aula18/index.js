
import Vue from 'vue';
import VueResource from 'vue-resource';


Vue.use(VueResource)
var mixin = {
    methods: {
        getUsers() {
            const baseURL = 'http://jsonplaceholder.typicode.com'
            console.log("Get users... mixin...")
            this.$http
                .get(baseURL + '/users')
                .then((response) => {
                    this.users = response.body;
                });
        }
    }
}

export default mixin;
