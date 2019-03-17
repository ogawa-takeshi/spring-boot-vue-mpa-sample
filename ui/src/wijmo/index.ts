import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import 'wijmo/wijmo.vue2.grid';
import 'wijmo/cultures/wijmo.culture.ja.js';
import 'wijmo/styles/wijmo.css';

Vue.use(Vuetify);

const app = new Vue({
	el: '#app',
	data: {
		gridData: [
			{ id: 15, product: 'ピュアデミグラスソース', date: '2017/01/10', amount: 6000 },
			{ id: 17, product: 'だしこんぶ', date: '2017/01/08', amount: 14500 },
			{ id: 18, product: 'ピリカラタバスコ', date: '2017/01/12', amount: 4000 },
			{ id: 84, product: 'なまわさび', date: '2017/01/21', amount: 8000 }
		]
	}
});