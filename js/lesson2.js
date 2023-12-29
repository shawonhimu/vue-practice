const { createApp, ref } = Vue;

const app = createApp({
	data() {
		return {
			counter: 0,
		};
	},
	methods: {
		msg() {
			return "Hello from vue method";
		},
		increase() {
			this.counter = this.counter + 1;
		},
		decrease() {
			if (this.counter <= 0) {
				this.counter = 0;
			} else {
				this.counter = this.counter - 1;
			}
		},
		increaseTwo(num) {
			this.counter = this.counter + num;
		},
		decreaseTwo(num) {
			if (this.counter <= 0) {
				this.counter = 0;
			} else {
				this.counter = this.counter - num;
			}
		},
	},
});

app.mount("#app");
