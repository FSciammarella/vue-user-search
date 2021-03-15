<template>
  <div class="page-btn-container">
    <Button
      :class="!page ? 'hidden' : ''"
      @click="previous"
      type="round"
      role="prev"
    />
    <input @input="validatePage" type="text" :value="page + 1" />
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
      let value = parseInt(evt.target.value) ?? 1;
      if (isNaN(value)) value = 1;
      if (value <= 1) {
        evt.target.value = 1;
        this.$emit('changePage', 0);
      } else if (value > this.maxPage) {
        evt.target.value = this.maxPage + 1;
        this.$emit('changePage', this.maxPage);
      } else {
        this.$emit('changePage', value - 1);
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
    currentPage() {
      return this.page;
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
