<template>
  <div>
    <form>
      <p>
        <input type="text" v-model="username" placeholder="Username" />
      </p>
      <p>
        <input type="text" v-model="password" placeholder="Password" />
      </p>

      <button v-on:click.prevent="login">Submit</button>
    </form>
  </div>
</template>

<script setup>
const nuxtApp = useNuxtApp();
const username = ref(null);
const password = ref(null);

async function login() {
  try {
    await nuxtApp.$auth.loginWith("local", {
      body: {
        username: username.value,
        password: password.value,
      },
    });
  } catch (ex) {
    if (!ex.response) alert("Server Error!");
    console.error(ex.stack);
  }
}
</script>
