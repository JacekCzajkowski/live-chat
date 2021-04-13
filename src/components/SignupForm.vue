<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" reequired placeholder="display name" v-model="displayName">
    <input type="email" reequired placeholder="email" v-model="email">
    <input type="password" reequired placeholder="password" v-model="password">
    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const displayName = ref('')
    const email = ref('')
    const password = ref('')

    const handleSubmit = () => {
      console.log(displayName.value, email.value, password.value)
    }

    return { displayName, email, password, handleSubmit }
  }
}
</script>

<style>

</style>