import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

const app = new Vue({
	el: '#app',
	data: {
		message: 'Hello from Vue.js'
	}
});