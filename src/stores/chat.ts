import { ref } from "vue";
import { defineStore } from "pinia";

export const useChatStore = defineStore("counter", () => {
  const chats = ref<{ userId: number; message: string }[]>([]);

  const storeChatMessage = (userId: number, message: string) => {
    chats.value.push({ userId, message });
  };

  return { chats, storeChatMessage };
});
