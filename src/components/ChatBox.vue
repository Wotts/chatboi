<script setup lang="ts">
import { ref, onMounted } from "vue";
import ChatInput from "./ChatInput.vue";
import { useChatStore } from "@/stores/chat";

const userId = ref<number>(0);

const chatStore = useChatStore();

const chat = (message: string) => {
  chatStore.storeChatMessage(userId.value, message);
};

const randomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};

onMounted(() => {
  userId.value = randomInt(100);
});
</script>

<template>
  <div>
    <h1>Welcome to Chatboi</h1>
    <ChatInput @send="chat" />
  </div>
</template>
