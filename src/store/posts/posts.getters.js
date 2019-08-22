import { find } from 'lodash'

export default {
  /**
   * Check if a post has deletion pending
   */
  isPostDeletionPending: state => postId =>
    state.postDeletionPending.includes(postId),

  /**
   * Get post by id
   */
  getPostById: state => postId => find(state.posts, post => post.id === postId)
}
