const { createApp, ref } = Vue;

const app = createApp({
	data() {
		return {
			skills: ["PHP", "Laravel", "Vue", "jQuery", "HTML", "CSS", "JS"],
			newSkill: "",
			validmsg: "",
		};
	},
	methods: {
		addNewSkill() {
			if (this.newSkill != "") {
				this.skills.push(this.newSkill);
				this.newSkill = "";
			} else {
				this.validmsg = "Invalid input";
				setTimeout(() => (this.validmsg = ""), 2000);
			}
		},
		removeSkill(i) {
			this.skills.splice(i, 1);
		},
	},
});

app.mount("#app");
