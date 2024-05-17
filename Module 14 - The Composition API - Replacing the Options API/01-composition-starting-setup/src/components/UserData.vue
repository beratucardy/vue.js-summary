<template>
  <div>
    <h2>{{ uName }}</h2>
    <h3>{{ uAge }}</h3>
  </div>
</template>

<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

export default {
  props: ["firstName", "lastName"],
  setup(props, context) {
    const uName = computed(() => {
      return props.firstName + " " + props.lastName;
    });
    console.log(context);
    /* context.emit("save-data", 1); // this.$emit("save-data",1) */
    const uAge = inject("uAge");
    onBeforeMount(() => {
      console.log("onBeforeMount");
    });
    onMounted(() => {
      console.log("onMounted");
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });
    onUpdated(() => {
      console.log("onUpdated");
    });
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
    });
    onUnmounted(() => {
      console.log("onUnmounted");
    });
    return { uName, uAge };
  },
  /* computed: {
    uName() {
      return this.firstName + " " + this.lastName;
    },
  }, */
};
</script>
