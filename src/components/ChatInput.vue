<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["send"]);

const message = ref(null);

const sendMessage = () => {
  emit("send", message.value);
  message.value = null;
};
</script>

<template>
  <input v-model="message" @keyup.enter="sendMessage" />
</template>
