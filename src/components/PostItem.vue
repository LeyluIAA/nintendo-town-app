<template>
  <div class="product-item">
    <b-card
      :img-src="data.jetpack_featured_media_url"
      img-alt="Image"
      img-top
      tag="article"
      style="width: 100%;"
      class="mb-2"
    >
      // eslint-disable-next-line vue/no-v-html
      <b-card-title class="post-title" v-html="data.title.rendered">
      </b-card-title>
      <b-badge
        v-for="category in data.categoryNames"
        :key="category.id"
        pill
        class="badge"
      >
        {{ category }}
      </b-badge>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
    index: Number,
    isProductDeletionPending: Boolean,
    disableActions: Boolean
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.product-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .product-link {
    color: $vue-color;
  }

  .delete-btn {
    cursor: pointer;
    padding: 5px 10px;
    border: 1px solid;
    display: inline-block;
    border-radius: 3px;
    margin-left: 10px;
    color: $danger-color;
    border-color: $danger-color;
  }
}

.card {
  box-shadow: 0px 2px 2px 0px rgba(56, 56, 56, 0.59);
}

.card-title {
  margin-bottom: 0;
}

.card-body {
  padding: 0.8rem;
}

h4 {
  font-size: 1.2rem;
}

.post-title {
  margin-bottom: 1%;
}

.badge {
  background-color: $navbar-color;
  margin-right: 1%;
}
</style>
