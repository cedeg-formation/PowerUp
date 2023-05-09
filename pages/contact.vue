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
        accept-charset="UTF-8"
        v-on:submit.prevent="onSubmit()"
        method="POST"
      >
        <div>
          <label>Email address</label>
          <input
            type="email"
            v-model="email"
            class="form-control"
            placeholder="Email"
          />
        </div>
        <div>
          <label>Message</label>
          <textarea
            type="text"
            v-model="message"
            class="form-control"
            placeholder="Message"
            required="required"
          ></textarea>
        </div>
        <hr />
        <div class="success" v-if="isSuccess">
          We received your submission, thank you!
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </main>
</template>

<style scoped></style>
