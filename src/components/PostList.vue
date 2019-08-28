<template>
  <div v-if="dataReady">
    {{ posts }}
    <p v-if="posts === null" class="infos-label">Chargement...</p>
    <p v-if="posts && !posts.length" class="infos-label">
      Vous n'avez pas encore de news Nintendo-Town :(
    </p>
    <post-item
      v-for="(post, index) in posts"
      :key="post.id"
      class="post-row"
      :index="index"
      :is-post-deletion-pending="isPostDeletionPending(post.id)"
      :disable-actions="!networkOnLine"
      :data="post"
    ></post-item>
    <infinite-loading spinner="spiral" @infinite="infiniteHandler">
      <div slot="spinner">Chargement...</div>
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
import { mapGetters, mapState, mapMutations } from 'vuex'

export default {
  components: { PostItem, InfiniteLoading },
  data() {
    return {
      dataReady: false,
      page: 1
    }
  },
  computed: {
    ...mapGetters('posts', ['isPostDeletionPending']),
    ...mapState('posts', ['posts']),
    ...mapState('app', ['networkOnLine'])
  },
  async mounted() {
    const posts = await postService.getAll(1)
    this.setPosts(posts.data)
    this.page += 1
    this.dataReady = true
  },
  methods: {
    ...mapMutations('posts', ['setPosts']),
    async infiniteHandler($state) {
      const posts = await postService.getAll(this.page)
      if (posts.length) {
        this.page += 1
        this.setPosts(posts.data)
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
