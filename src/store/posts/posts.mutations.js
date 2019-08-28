export default {
  /* Posts */
  setPosts: (state, posts) => state.posts.concat(posts),
  addPost: (state, post) => state.posts.push(post),
  removeProductById: (state, postId) => {
    const index = state.posts.findIndex(post => post.id === postId)
    state.posts.splice(index, 1)
  },

  /* Posts deletion */
  addPostDeletionPending: (state, postId) =>
    state.postDeletionPending.push(postId),
  removePostDeletionPending: (state, postId) => {
    const index = state.posts.findIndex(post => post.id === postId)
    state.postDeletionPending.splice(index, 1)
  },

  /* Post creation */
  setPostCreationPending: (state, value) => (state.postCreationPending = value)
}
