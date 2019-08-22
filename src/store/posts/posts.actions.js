import postsService from '@/services/posts'

export default {
  /**
   * Fetch posts
   */
  getPosts: async ({ commit }) => {
    console.log('est ce qsue ?')
    const posts = await postsService.getAll(1)
    commit('setPosts', posts)
  }
}
