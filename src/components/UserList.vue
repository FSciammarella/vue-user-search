<template>
  <div v-if="userList.length !== 0">
    <Pagination
      @changePage="changePage"
      :page="page"
      :listLength="parseInt(userList.length)"
      :maxItems="parseInt(20)"
    />
    <ul>
      <li
        v-for="user in pagedUserList"
        :key="`${user.name.first}${user.name.last}`"
      >
        <img v-bind:src="user.picture.thumbnail" alt="avatar" />
        <p>{{ user.name.first }} {{ user.name.last }}, {{ user.dob.age }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import Pagination from './Pagination';

export default {
  name: 'UserList',
  components: { Pagination },
  props: {
    userList: [Object],
  },
  data() {
    return { page: 0, maxItemsPerPage: 20 };
  },
  methods: {
    changePage(newPage) {
      this.page = newPage;
    },
  },
  computed: {
    pagedUserList() {
      return this.userList.slice(
        this.page * this.maxItemsPerPage,
        (this.page + 1) * this.maxItemsPerPage
      );
    },
  },
};
</script>

<style>
li {
  display: flex;
  align-items: center;
  padding: 0.5rem 0 0.5rem 0;
}
img {
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 100%;
  /* transform: translateY(+50%); */
}
p {
  font-weight: 300;
  padding-left: 4%;
  display: inline-block;
}
</style>
