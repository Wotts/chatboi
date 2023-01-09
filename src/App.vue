<script setup lang="ts">
import ChatBox from "./components/ChatBox.vue";
import ChatConversation from "./components/ChatConversation.vue";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <ChatBox />
      <ChatConversation />
    </div>
  </header>
</template>
