<template>
  <div class="page-btn-container">
    <Button
      :class="!page ? 'hidden' : ''"
      @click="previous"
      type="round"
      role="prev"
    />
    <input @input="validatePage" type="text" v-model="currentPage" />
    <Button
      :class="page === maxPage ? 'hidden' : ''"
      @click="next"
      type="round"
      role="next"
    />
  </div>
</template>

<script>
import Button from './Button';
export default {
  data() {
    return {
      currentPage: this.page,
    };
  },
  components: {
    Button,
  },
  name: 'Pagination',
  props: {
    page: Number,
    maxItems: Number,
    listLength: Number,
  },
  methods: {
    validatePage(evt) {
      let value = parseInt(evt.target.value) ?? 0;
      if (isNaN(value)) value = 0;
      if (value < 0) {
        this.currentPage = 0;
        this.$emit('changePage', 0);
      } else if (value > this.maxPage) {
        this.currentPage = this.maxPage;
        this.$emit('changePage', this.maxPage);
      } else {
        this.currentPage = value;
        this.$emit('changePage', value);
      }
    },
    previous() {
      this.$emit('changePage', this.page - 1);
    },
    next() {
      this.$emit('changePage', this.page + 1);
    },
  },
  computed: {
    maxPage() {
      return parseInt(Math.ceil(this.listLength / this.maxItems) - 1);
    },
  },
  emits: ['changePage'],
};
</script>

<style scoped>
.page-btn-container {
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
}
.page-btn-container button,
.page-btn-container input {
  padding: 10px;
  border-radius: 100%;
  text-align: center;
  /* width: 30%; */
  color: white;
  margin: auto;
  background-color: #009191;
  font-weight: lighter;
}
.page-btn-container input {
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
}

.hidden {
  visibility: hidden;
}
</style>
