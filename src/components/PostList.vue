<template>
  <div v-if="dataReady">
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
  </div>
</template>

<script>
import PostItem from '@/components/PostItem'
import postService from '@/services/posts'
import { mapGetters, mapState, mapMutations } from 'vuex'

export default {
  components: { PostItem },
  data() {
    return {
      dataReady: false
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
    this.dataReady = true
  },
  methods: {
    ...mapMutations('posts', ['setPosts'])
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
  max-width: 500px;
  margin: 10px auto;
  justify-content: space-between;
}
</style>
