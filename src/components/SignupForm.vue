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
import useSignup from '../composables/useSignup.js'

export default {
  setup() {
    const { error, signup } = useSignup()

    const displayName = ref('')
    const email = ref('')
    const password = ref('')

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value)
      console.log('user signed up')
    }

    return { displayName, email, password, handleSubmit }
  }
}
</script>

<style>

</style>