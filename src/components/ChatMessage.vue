<script setup lang="ts">
defineProps({
  isMe: Boolean,
  userId: Number,
  message: String,
});
</script>

<template>
  <div
    class="m-1 flex max-w-xl flex-row items-center rounded-xl p-2"
    :class="
      isMe
        ? 'mr-8 justify-self-start bg-amber-300 text-stone-700'
        : 'ml-8 justify-self-end bg-amber-900 text-stone-300'
    "
  >
    <img
      class="mr-2 h-8 w-8 rounded-full border-2 border-stone-700"
      :class="{ invert: !isMe }"
      src="@/assets/vaultboy.svg"
    />
    {{ message }}
  </div>
</template>
