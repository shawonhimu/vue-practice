const { createApp, ref } = Vue;

const app = createApp({
	data() {
		return {
			bgColor: "blue",
			textColor: "",
		};
	},
	methods: {},
});

app.mount("#app");
