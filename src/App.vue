<template>
  <div class="app loading" v-if="users.length === 0">
    Loading Users...
  </div>
  <div v-else class="app">
    <h1 class="title">Pesquisa de Usuários</h1>
    <QueryBox @queryChange="filterUsers" />
    <div class="bottom">
      <div class="container">
        <h2 class="found">
          {{ filteredUsers.length }} Usuário(s) Encontrado(s)
        </h2>
        <UserList :userList="filteredUsers" />
      </div>
      <Stats :userList="filteredUsers" />
    </div>
  </div>
</template>

<script>
import UserList from './components/UserList';
import QueryBox from './components/QueryBox';
import Stats from './components/Stats';

export default {
  data() {
    return {
      users: [],
      filteredUsers: [],
    };
  },
  components: {
    UserList,
    QueryBox,
    Stats,
  },
  mounted() {
    this.loadUsers();
  },
  methods: {
    loadUsers() {
      fetch('https://randomuser.me/api/?results=500&seed=abc').then((res) =>
        res.json().then((data) => {
          this.users = [...data.results];
          console.log(this.users.filter((user) => user.nat === 'BR'));
        })
      );
    },
    filterUsers(query) {
      if (query) {
        this.filteredUsers = this.users.filter((user) =>
          (user.name.first + ' ' + user.name.last)
            .toLowerCase()
            .includes(query.toLowerCase())
        );
      } else {
        this.filteredUsers = [];
      }
      console.log(this.filteredUsers);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  border: none;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  outline: none;
  background: none;
  background-image: none;
  text-decoration: none;
  box-sizing: border-box;
  list-style-type: none;
}

html,
body {
  height: 100%;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

body {
  height: 100%;
  width: 100%;
  padding: 15px;
  margin: auto;
  text-align: center;
  background-color: #e6f4f1;
}

.app {
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 80%;

  background-color: white;
  box-shadow: 2px 2px 2px 0 rgba(128, 128, 128, 0.576);
  padding: 2%;
  margin-bottom: 3%;
}
.loading {
  font-size: 4.5rem;
}

h2 {
  font-size: 2.2rem;
  margin-bottom: 2rem;
}
li {
  display: flex;
  align-items: center;
  padding: 0.5rem 0 0.5rem 0;
}
.container {
  display: flex;
  flex-direction: column;
  text-align: left;
  flex-grow: 1;
  flex-basis: 45%;
  margin: 0 1% 0 1%;
  border: 1px solid rgba(128, 128, 128, 0.57);
  padding: 3%;
  border-radius: 4px;
  box-shadow: 1px 1px grey;
}
.bottom {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
}

@media (max-width: 650px) {
  .bottom {
    flex-direction: column-reverse;
  }
  h2 {
    font-size: 1.5rem;
  }
}
</style>
