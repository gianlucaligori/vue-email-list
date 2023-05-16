const app = Vue.createApp({
	data() {
		return {
			randomMail: 0,
		}
	},
	methods: {
		getRandomMail() {
			axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
				.then(serverResponse => this.randomMail = serverResponse.data.response);
		},
	},
	created() {
		this.getRandomMail();
	},
});

app.mount('#app');