<template>
  <div v-if="dataReady">
    <p v-if="lesPosts === null" class="infos-label">Chargement...</p>
    <p v-if="lesPosts && !lesPosts.length" class="infos-label">
      Vous n'avez pas encore de news Nintendo-Town :(
    </p>
    <post-item
      v-for="(post, index) in lesPosts"
      :key="post.id"
      class="post-row"
      :index="index"
      :is-post-deletion-pending="isPostDeletionPending(post.id)"
      :disable-actions="!networkOnLine"
      :data="post"
    ></post-item>
    <infinite-loading spinner="spiral" @infinite="infiniteHandler">
      <!-- <div slot="spinner">Chargement...</div> -->
      <div slot="no-more">Vous avez épuisé toutes les news !</div>
      <div slot="no-results" class="infos-label">
        Vous n'avez pas encore de news Nintendo-Town :(
      </div>
    </infinite-loading>
  </div>
</template>

<script>
import PostItem from '@/components/PostItem'
import postService from '@/services/posts'
import InfiniteLoading from 'vue-infinite-loading'
import { mapGetters, mapState } from 'vuex'
//import axios from 'axios';

export default {
  components: { PostItem, InfiniteLoading },
  data() {
    return {
      dataReady: false,
      page: 1,
      lesPosts: []
    }
  },
  computed: {
    ...mapGetters('posts', ['isPostDeletionPending']),
    ...mapState('app', ['networkOnLine'])
  },
  async mounted() {
    const posts = await postService.getAll(this.page)
    this.lesPosts = posts.data
    this.page += 1
    this.dataReady = true
  },
  methods: {
    async infiniteHandler($state) {
      const posts = await postService.getAll(this.page)
      if (posts.data.length) {
        this.page += 1
        this.lesPosts.push(...posts.data)
        $state.loaded()
      } else {
        $state.complete()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.infos-label {
  text-align: center;
}

.post-row {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}
</style>
