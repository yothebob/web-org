<script setup>
 import HelloWorld from './components/HelloWorld.vue'
 import TheWelcome from './components/TheWelcome.vue'

 /* export default {
  *     data() {
    return {
    count: 0
    }
  *     },
  *     methods: {
    // org mode needs tree format, list items, tables, todo, time sheet, maybe code running? title? highlighting? maybe keybindings? 
    createHeading() {
    // arg: lineNumber?
    return null;
    }
  *     }
  * } */
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
	<HelloWorld msg="Brandon You did it!" />
	<textarea id="testId" name="test" rows="50" cols="50">
    </textarea>
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
