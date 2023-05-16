const app = Vue.createApp({
	data() {
		return {
			randomMail: [],
		}
	},
	methods: {
		getRandomMail() {

            this.randomMail = [];


            for (let i = 0; i < 10; i++) {
                
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then(serverResponse => this.randomMail.push(serverResponse.data.response));
            } 
		},




        
	},
	 created() {
	 	this.getRandomMail();
	},
});

app.mount('#app');