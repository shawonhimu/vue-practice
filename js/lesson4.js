const { createApp, ref } = Vue;

const app = createApp({
	data() {
		return {
			num: "",
			result: "",
		};
	},
	methods: {
		getDouble() {
			this.result = this.num * 2;
		},

		getSquare() {
			this.result = this.num * this.num;
		},
		addTen() {
			this.result = this.num + 10;
		},
		doReset() {
			this.result = "";
			this.num = "";
		},
	},
});

app.mount("#app");
