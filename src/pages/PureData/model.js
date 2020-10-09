import { queryTabData, querySelectData, queryTableData, queryFormData, saveFormData } from './service';

const Model = {
  namespace: 'pureData',
  state: {
    tab_data: [],   //tab可选项
    selectTag: [],    //select可选项
    tableData: [],       //table数据
    formDetailData: {},      //表单数据
    result: {},
  },
  //处理异步操作
  effects: {
    

    //tab数据
    *fetchTab({ }, { call, put }) {
      const response = yield call(queryTabData);
      yield put({
        type: 'queryTab',
        res: Array.isArray(response) ? response : []
      })
    },

    //selectTab数据
    *fetchSelect({ }, { call, put }) {
        const response = yield call(querySelectData);
        yield put({
            type: 'querySelect',
            res: Array.isArray(response) ? response : []
        })
    },

    //table数据
    *fetchTable({ params }, { call, put }) {
      const response = yield call(queryTableData, params);
      yield put({
        type: 'queryTable',
        res: Array.isArray(response) ? response : []
      })
    },
    
    //表单数据查询
    *fetchForm({ params }, { call, put }) {
        const response = yield call(queryFormData, params);
        yield put({
            type: 'queryForm',
            res: response
        })
    },

    //保存表单
    *fetchUpdateForm({ params }, { call, put }) {
      const response = yield call(saveFormData, params);
      yield put({
        type: 'saveFormRes',
        res: response
      })
    }

  },
  //处理同步操作
  reducers: {
    queryTab(state, action) {
        return { ...state, tab_data: action.res}
    },
    querySelect(state, action) {
        return { ...state, selectTag: action.res}
    },
    queryTable(state, action) {
        return { ...state, tableData: action.res}
    },
    queryForm(state, action) {
        return { ...state, formDetailData: action.res}
    },
    saveFormRes(state, action) {
        return { ...state, result: action.res}
    }
  },
};
export default Model;
