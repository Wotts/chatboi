<script setup lang="ts">
import { useChatStore } from "@/stores/chat";
import ChatMessage from "./ChatMessage.vue";

defineProps({
  thisUserId: Number,
});

const chatStore = useChatStore();
</script>

<template>
  <div
    class="flex h-full flex-col justify-end overflow-y-scroll rounded-xl border-4 border-stone-700 p-2"
  >
    <p
      v-if="chatStore.chats.length === 0"
      class="mb-4 place-self-center text-stone-700"
    >
      Be the first to say something
    </p>
    <div id="chat-box" class="overflow-y-scroll">
      <div
        v-for="chat in chatStore.chats"
        :key="chat.userId"
        class="grid w-full"
      >
        <ChatMessage
          :is-me="thisUserId === chat.userId"
          :user-id="chat.userId"
          :message="chat.message"
        />
      </div>
    </div>
  </div>
</template>
