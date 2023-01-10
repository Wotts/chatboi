<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import ChatInput from "@/components/ChatInput.vue";
import ChatConversation from "@/components/ChatConversation.vue";
import { useChatStore } from "@/stores/chat";

const userId = ref<number>(0);

const chatStore = useChatStore();

const newChatMessage = (message: string) => {
  chatStore.storeChatMessage(userId.value, message);

  const chatBox = document.getElementById("chat-box");
  if (chatBox) {
    nextTick(() => chatBox.scrollTo(0, chatBox.scrollHeight));
  }
};

const randomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};

onMounted(() => {
  userId.value = randomInt(100);
});
</script>

<template>
  <div class="flex h-full flex-col">
    <h1 class="mb-4 text-2xl text-stone-500">
      Welcome back, chatboi {{ userId }}
    </h1>
    <ChatConversation :this-user-id="userId" />
    <ChatInput class="mt-2 w-full" @send="newChatMessage" />
  </div>
</template>
