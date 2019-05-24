const state={
  routerMenu:[],  //初始化一个colects数组
  routeSelect:0
};
for (var item in state) {
  localStorage.getItem(item) ? state[item] = JSON.parse(localStorage.getItem(item)) : 0;
  console.log(localStorage.getItem(item))
}
console.log(state.routeSelect)
console.log(state.routerMenu)
const getters={
  RENDER_ROUTER_MENU(state){ //承载变化的collects
    return state.routerMenu;
  },
  RENDER_ROUTER_SELECT(state){
    return state.routeSelect;
  }
};
const mutations={
  SET_ROUTER_MENU(state,items){ //如何变化collects,插入items
    state.routerMenu=items
    localStorage.setItem('routerMenu', JSON.stringify(state.routerMenu));
  },
  SET_ROUTER_SELECT(state,items){ //如何变化collects,插入items
    state.routeSelect=items
      localStorage.setItem('routeSelect', JSON.stringify(state.routeSelect));
  }
};
const actions={
  ASY_SET_ROUTER_MENU(context,item){ //触发mutations里面的pushCollects ,传入数据形参item 对应到items
    context.commit('SET_ROUTER_MENU',item);
  },
  ASY_SET_ROUTER_SELECT(context,item){ //触发mutations里面的pushCollects ,传入数据形参item 对应到items
    context.commit('SET_ROUTER_SELECT',item);
  }
};
export default {
  namespaced:true,//用于在全局引用此文件里的方法时标识这一个的文件名
  state,
  getters,
  mutations,
  actions
}
