import uinfo from 'assets/userInfo.json';

export const state = () => ({
  //userInfo: null
  userInfo : JSON.parse(JSON.stringify(uinfo)),
})

export const mutations = {
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo
  },
  setSellAllSolar(state, data){
    if(data !== undefined){
      state.userInfo.solarModule.sellAll = data;
    }
  },
  setIntegrationSolar(state, data){
    if(data !== undefined){
      state.userInfo.solarModule.integration = data;
    }
  },
  setFaceAngle(state, data) {
    const f = state.userInfo.solarModule.faces.filter((f) => f.orientation === data.name)
    if(f.length===0) return;
    f[0].angle = data.value;
  },
  setFaceArea(state, data) {
    const f = state.userInfo.solarModule.faces.filter((f) => f.orientation === data.name)
    if(f.length===0) return;
    f[0].area = data.value;
  },
  setSolarModule(state, data) {
    if(data===null) return
    console.log(data);
    if(data.stateFinancialHelp !== undefined) state.userInfo.solarModule.statehelp = data.stateFinancialHelp;
    if(data.totalAmountOfSolarPanels !== undefined) state.userInfo.solarModule.nbPanel = data.totalAmountOfSolarPanels;
    if(data.totalCost !== undefined) state.userInfo.solarModule.price = data.totalCost;
    if(data.totalPowerOutputKWH !== undefined) state.userInfo.solarModule.prod = data.totalPowerOutputKWH;
    if(data.perFacadeDetails !== undefined){
      console.log("new faces infos from backend")
    }
  },
  switchPoseSolarFace(state, index){
    if(index=== undefined || index<0 || index>9) return;
    state.userInfo.solarModule.faces.filter(face => face.type === index)[0].pose = !state.userInfo.solarModule.faces.filter(face => face.type === index)[0].pose;
  }
}

export const getters = {
  getUserInfo(state) {
    return state.userInfo
  },
  getFaceinfoRequest(state){
    let listFinal = [];
    state.userInfo.solarModule.faces.forEach((f) => {
      listFinal.push({surface : f.area.toFixed(2), angle: f.angle, orientation: f.orientationRequest});
    });
    return listFinal;
  }
}
