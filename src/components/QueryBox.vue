<template>
  <div class="query-box">
    <form>
      <label for="search-box">Busca:</label>
      <input
        class="search-box"
        type="text"
        placeholder="Digite aqui sua busca"
        @input="emitQuery"
      />
      <button class="submit-btn" type="submit" @submit.prevent="() => {}">
        Buscar
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'QueryBox',
  emits: ['queryChange'],
  methods: {
    emitQuery(evt) {
      this.$emit('queryChange', evt.target.value);
    },
  },
};
</script>

<style>
label {
  text-align: left;
  display: block;
  margin-left: 0;
  margin-right: auto;
  color: rgba(0, 128, 128, 0.597);
  font-size: 0.9rem;
  font-weight: normal;
}
.query-box {
  position: relative;
  text-align: left;
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
}

::placeholder {
  color: rgba(0, 0, 0, 0.337);
}

.search-box {
  width: 90%;
  line-height: 2.5;
  padding-left: 1rem;
  border-color: rgba(0, 145, 145, 0.603);
  transition: border-bottom 35ms linear;
  flex: 0 0 90%;
}
.search-box:focus {
  border-bottom: 2px solid rgba(0, 145, 145, 0.603);
  margin-bottom: -10px;
}
.submit-btn {
  margin-left: 1rem;
  line-height: 2.5;
  width: 8%;
  color: white;
  background-color: teal;
  transition: background-color 100ms ease-in;
}
.submit-btn:hover {
  background-color: rgb(0, 177, 177);
}
.bottom {
  flex-direction: row;
  margin-top: 2rem;
  display: flex;
  height: 100%;
}
@media (max-width: 1080px) {
  .submit-btn {
    display: none;
  }
}
</style>
