<template>
  <div class="container stats">
    <h2>Estatísticas</h2>
    <ul class="stat-list">
      <li>Sexo Masculino: &nbsp;{{ cMale ?? 0 }}</li>
      <li>Sexo feminino: &nbsp;{{ cFemale ?? 0 }}</li>
      <li>Soma das idades: &nbsp;{{ age ?? 0 }}</li>
      <li>Média das idades: &nbsp;{{ average ?? 0 }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Stats',
  props: {
    userList: [Object],
  },
  computed: {
    cMale: function() {
      let list = this.userList;
      return list.reduce((acc, user) => {
        return user.gender === 'male' ? acc + 1 : acc;
      }, 0);
    },
    cFemale: function() {
      return (this.userList.length ?? 0) - this.cMale;
    },
    age: function() {
      return this.userList.reduce((acc, user) => acc + user.dob.age, 0);
    },
    average: function() {
      return this.userList.length
        ? (this.age / this.userList.length).toFixed(2)
        : 0;
    },
  },
};
</script>

<style>
.container.stats {
  max-height: 20rem;
}
</style>
