<template>
  <button class="btn">
    <slot />
  </button>
</template>

<style lang="css" scoped>
.btn {
  background-color: #1B84FF;
  color: aliceblue;
  font-family: inherit;
  border: none;
  padding: 0.5rem 2rem;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    transition: 0.2s ease-in-out;
    background-color: #b7f803;
    color: rgb(54, 54, 54);
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  }
}
</style>
