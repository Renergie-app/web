export const state = () => ({
  userInfo: null
})

export const mutations = {
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo
  }
}

export const getters = {
  getUserInfo(state) {
    return state.userInfo
  }
}
