export type toolState = {
  showSlider: boolean;
};

const state: toolState = {
  showSlider: true,
};

export default {
  namespaced: true,
  state,
  getters: {
    showInfo: (state: toolState): boolean => {
      return state.showSlider;
    },
  },
  mutations: {
    setShowInfo(state: toolState, payload: boolean): void {
      state.showSlider = payload;
    },
  },
  actions: {
    changeUserInfo({ commit }, payload: { data: boolean }): void {
      setTimeout(() => {
        commit("setShowInfo", false);
      }, 2000);
    },
  },
};
