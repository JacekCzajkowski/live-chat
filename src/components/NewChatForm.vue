<template>
  <form>
    <textarea 
      placeholder="Type a message and hit enter to send..."
      v-model="message"
    ></textarea>
  </form>
</template>

<script>
import { ref } from 'vue'
import getUser from '../composables/getUser'
import { timestamp } from '../firebase/config'

export default {
  setup() {
    const { user } = getUser()
    const message = ref('')

    const handleSubmit = async () => {
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: timestamp()
      }
    }
  }
}
</script>

<style>

</style>