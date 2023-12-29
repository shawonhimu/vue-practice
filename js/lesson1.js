const { createApp, ref } = Vue;

const app = createApp({
	data() {
		return {
			message: "Hello World from Vue Data",
			info: {
				name: "Shawon Himu",
				age: "26",
				link: "https://github.com/shawonhimu",
			},
			counter: 0,
		};
	},
	methods: {
		msg() {
			return "Hello from vue method";
		},
	},
});

app.mount("#app");
