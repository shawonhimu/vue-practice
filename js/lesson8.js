const { createApp, ref } = Vue;

const app = createApp({
	data() {
		return {
			skills: [
				{ name: "HTML", experience: 2 },
				{ name: "CSS", experience: 2 },
				{ name: "JS", experience: 1 },
				{ name: "PHP", experience: 1 },
			],
			newSkill: { name: "", experience: "" },
			validmsg: "",
		};
	},
	methods: {
		addNewSkill() {
			if (this.newSkill.name != "" && this.newSkill.experience != "") {
				this.skills.push(this.newSkill);
				this.newSkill = {};
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
