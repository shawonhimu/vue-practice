const { createApp, ref } = Vue;

const app = createApp({
	data() {
		return {
			name: "",
			success: "",
		};
	},
	methods: {
		msg() {
			return "Hello from vue method";
		},
		handleKeyup(e) {
			this.name = e.target.value;
		},
		handleSubmit(e) {
			if (this.name == "") {
				this.success = "Warning ! The field is empty !";
				console.log("Submit button is clicked !");
			} else {
				this.success = "Form has submitted successfully";
				console.log("Submit button is clicked !");
			}
		},

		handleCard(e) {
			console.log("Card event is clicked !");
		},

		handleButton(e) {
			// e.stopPropagation();
			console.log("Button is clicked !");
		},
	},
});

app.mount("#app");
