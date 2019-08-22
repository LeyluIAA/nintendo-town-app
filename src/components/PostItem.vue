<template>
  <div class="product-item">
    <b-card
      :title="data.title.rendered"
      :img-src="data.jetpack_featured_media_url"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 25rem;"
      class="mb-2"
    >
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
</style>
