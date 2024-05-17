<template>
  <section class="container">
    <user-data :first-name="firstName" :last-name="lastName"></user-data>
    <!-- <p>{{ setNewAge() }}</p> -->
    <!-- computed gibi kullanmak isteyseydim böyle yapardım -->
    <button @click="setNewAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
import {
  ref,
  reactive,
  isReactive,
  isRef,
  toRefs,
  computed,
  watch,
  provide,
} from "vue";
import UserData from "./components/UserData.vue";

export default {
  components: {
    UserData,
  },
  setup() {
    /* ref kullanmadan da tanımlayabilirsin ama reactivity'si olmaz */
    /* const uName = ref("Maximilian");
    const uAge = ref(25); */
    /* const user = ref({
      name: "Maximilian",
      age: 25,
    }); */
    /* reactive sadece object ile çalışır, ref her şeyle */
    const uAge = ref(25);
    const user = reactive({
      name: "Maximilian",
      age: 25,
    });
    /* reactivity object'te çalışır sadece, içindekileri bilmez ondan obje return ederken hepsini return etmek lazım */
    console.log(isRef(uAge.value), isReactive(user.name));
    console.log(isRef(uAge), isReactive(user));
    setTimeout(() => {
      /* uName.value = "Max"; */
      // ref string
      /* user.value.name = "Max"; */
      // ref object
      /* user.name = "Max"; */
      // reactive object
      /* uAge.value = 31; */
      // ref age
      /* user.value.age = 32; */
      // ref object
      /* user.age = 32; */
      // reactive object
    }, 2000);
    /* aşağıdaki gibi reactivity getirilebilir artık userRefs.name return edersem o da reactivityli  */
    /* const userRefs = toRefs(user); */
    const setNewAge = () => {
      /* user.age = 32; */
      uAge.value = 32;
    };
    const firstName = ref("");
    const lastName = ref("");
    /* const setFirstName = (evet) => {
      firstName.value = event.target.value;
    };
    const setLastName = (evet) => {
      lastName.value = event.target.value;
    }; */
    const uName = computed(() => {
      return firstName.value + " " + lastName.value;
    });
    /* computed refs readonlydir */
    /* watch(uAge, (newValue, oldValue) => {
      console.log("Old Age: " + oldValue);
      console.log("New Age: " + newValue);
    }); */
    watch([uAge, uName], (newValues, oldValues) => {
      console.log("Old Age: " + oldValues[0]);
      console.log("New Age: " + newValues[0]);
      console.log("Old Name: " + oldValues[1]);
      console.log("New Name: " + newValues[1]);
    });
    const lastNameInput = ref(null);
    const setLastName = () => {
      /* lastName.value = this.$refs.lastNameInput.value; */
      lastName.value = lastNameInput.value.value;
    };
    provide("uAge", uAge);
    return {
      uAge,
      setNewAge,
      firstName,
      lastName,
      lastNameInput,
      uName,
      setLastName,
    };
  },
  /* data() {
    return {
      userName: "Maximilian",
      age:25,
    };
  }, */
  /* methods: {
    setNewAge() {
      this.age = 32;
    },
  }, */
  /* watch: {
    age(val) {
      console.log(val);
    },
  }, */
  /* provide() {
    return {
      age: this.age,
    };
  }, */
};
</script>

<!-- setup(){} yerine direk script tanımlarken kullanabiliriz ve export default'a da gerek kalmaz -->

<!-- <script setup>
import { ref } from "vue";

const uName = ref("Maximilian");
return { userName: uName };
</script> -->

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
