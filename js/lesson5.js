const { createApp, ref } = Vue;

const app = createApp({
	data() {
		return {
			activeClass: "bg-red-700",
		};
	},
	methods: {
		setClass(className) {
			this.activeClass = className;
		},
	},
});

app.mount("#app");
