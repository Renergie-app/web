import uinfo from 'assets/userInfo.json';

export const state = () => ({
  //userInfo: null
  userInfo : JSON.parse(JSON.stringify(uinfo)),
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
