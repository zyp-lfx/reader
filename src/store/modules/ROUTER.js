const state={
  routerMenu:[],  //初始化一个colects数组
};
const getters={
  RENDER_ROUTER_MENU(state){ //承载变化的collects
    return state.routerMenu;
  }
};
const mutations={
  RE_ROUTER_MENU(state,items){ //如何变化collects,插入items
    state.routerMenu=items
  }
};
const actions={
  ASY_RE_ROUTER_MENU(context,item){ //触发mutations里面的pushCollects ,传入数据形参item 对应到items
    context.commit('RE_ROUTER_MENU',item);
  }
};
export default {
  namespaced:true,//用于在全局引用此文件里的方法时标识这一个的文件名
  state,
  getters,
  mutations,
  actions
}
