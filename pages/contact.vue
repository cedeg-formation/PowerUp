<script lang="ts" setup>
const loading = ref(true);
const email = ref("");
const message = ref("");
const isSuccess = ref(false);

async function submit() {
  try {
    loading.value = true;
    const newMessage = {
      email: email.value,
      message: message.value,
    };
  } catch (e) {
    alert(e);
  } finally {
    loading.value = false;
    navigateTo("/");
  }
}
</script>
<template>
  <main>
    <Parallax title="Contact" imageUrl="/img/Aki-Chainsawman.jpg" />
    <div class="p-6">
      <form
        class="flex flex-col items-center gap-4"
        accept-charset="UTF-8"
        v-on:submit.prevent="onSubmit()"
        method="POST"
      >
        <div class="flex gap-2">
          <label class="text-2xl pr-4">Email address</label>
          <input
            type="email"
            v-model="email"
            class="form-control bg-amber-400 w-60"
            placeholder="Email"
          />
        </div>
        <div class="flex gap-2">
          <label class="text-2xl pr-[3em]">Message</label>
          <textarea
            type="text"
            v-model="message"
            class="form-control bg-amber-400 h-40 w-60"
            placeholder="Message"
            required="required"
          ></textarea>
        </div>

        <div class="success" v-if="isSuccess">
          We received your submission, thank you!
        </div>
        <button
          class="text-4xl uppercase text-amber-700 font-bold"
          type="submit"
        >
          Envoyer
        </button>
      </form>
    </div>
  </main>
</template>

<style scoped></style>
