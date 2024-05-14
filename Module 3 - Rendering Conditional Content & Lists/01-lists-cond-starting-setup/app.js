const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
      this.enteredGoalValue = "";
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount("#user-goals");

/* v-else, sadece v-if'ten sonra kullanılır araya başka html elementi girerse olmaz, v-else-if'de aynı şekilde. Ard arda kullanılmalılar. */
/* v-show, v-else veya v-else-if ile kullanılmaz. v-show display: none ekler */
/* v-show, sürekli gözüküp giden toggle gibi örnekler dışında kullanılmamalı performanstan dolayı */
