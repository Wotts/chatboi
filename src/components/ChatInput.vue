<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["send"]);

const message = ref("");

const sendMessage = () => {
  if (message.value && message.value.trim()) {
    emit("send", message.value);
    message.value = "";
  }
};
</script>

<template>
  <div class="flex flex-row items-center gap-1 rounded-xl bg-stone-700">
    <input
      v-model="message"
      class="w-full rounded-xl border-4 border-stone-700 bg-stone-900 p-2 text-stone-500
        placeholder-stone-700 outline-none transition-all focus:bg-stone-800"
      placeholder="Type a message"
      @keyup.enter="sendMessage"
    />
    <button
      class="mr-2 flex h-8 w-8 flex-row items-center justify-center rounded-full bg-stone-900 hover:bg-stone-800 active:scale-95"
      @click="sendMessage"
    >
      <p class="-mt-1 text-2xl font-bold text-stone-700">></p>
    </button>
  </div>
</template>
