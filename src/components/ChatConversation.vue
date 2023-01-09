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
