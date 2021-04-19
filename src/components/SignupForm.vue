<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" reequired placeholder="Nazwa użytkownika" v-model="displayName">
    <input type="email" reequired placeholder="email" v-model="email">
    <input type="password" reequired placeholder="hasło" v-model="password">
    <div class="error"> {{ error }}</div>
    <button>Zapisz się</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composables/useSignup.js'

export default {
  setup(props, context) {
    const { error, signup } = useSignup()

    const displayName = ref('')
    const email = ref('')
    const password = ref('')

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value)
      if (!error.value) {
        context.emit('signup')
      }
    }

    return { displayName, email, password, handleSubmit, error }
  }
}
</script>

<style>

</style>