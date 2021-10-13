export type userState = {
  isLogin: boolean;
};

const state: userState = {
  isLogin: true,
};

export default {
  namespaced: true,
  state,
  getters: {
    loginInfo: (state: userState): string => {
      return `${state.isLogin ? "已登录" : "未登录"}`;
    },
  },
  mutations: {
    setUserInfo(state: userState, payload: boolean): void {
      state.isLogin = payload;
    },
  },
  actions: {
    changeUserInfo({ commit }, payload: { data: boolean }): void {
      setTimeout(() => {
        commit("setUserInfo", false);
      }, 2000);
    },
  },
};
