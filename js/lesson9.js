const { createApp, ref } = Vue;

const app = createApp({
	data() {
		return {
			aboutMe: [
				{
					name: "Shawon",
					age: 26,
					website: "https://github.com/shawonhimu",
				},
				{
					name: "Himu",
					age: 24,
					website: "https://github.com/himu",
				},
				{
					name: "Ezaz",
					age: 27,
					website: "https://github.com/ezaz",
				},
			],
		};
	},
	methods: {},
});

app.mount("#app");
