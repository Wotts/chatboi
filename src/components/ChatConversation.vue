<script setup lang="ts">
import { useChatStore } from "@/stores/chat";

const chatStore = useChatStore();
</script>

<template>
  <div>
    <p v-for="chat in chatStore.chats" :key="chat.userId">
      {{ chat.userId }} says: "{{ chat.message }}"
    </p>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
}
</style>
