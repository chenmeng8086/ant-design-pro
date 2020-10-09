import { getUserData, getList } from './service'

const model = {
    namespace: 'quotaList',

    state: {
        business: [{
            name: '全部',
            code: '1'
        }, {
            name: '基金'
        }, {
            name: '手炒'
        }, {
            name: '基金'
        }, {
            name: '付费产品'
        }, {
            name: 'PC'
        }, {
            name: 'SNS'
        },],
        
        dataDomain: [{
            name: '全部'
        }, {
            name: '交易域'
        }, {
            name: '电商域'
        }],

    },

    reducers: {
        updateBusiness (state, { payload: business }) {
            return {...state, business} // state参数是引用类型，如果直接return state，dva会认为没有修改state，所有不会刷新
        }
    },

    effects: {
        *getBusiness (paramas, {put, call}) {
            const res = yield call(getList)
            console.log('res', res)
            // 如果yield call的是一个Promise对象，那只有在Promise返回的是resolve方法的情况下，下面跟着的yield put及后面的代码才会执行，若返回了rejector则后面的代码则全部停止执行
            yield put({type: 'updateBusiness', payload: res.data})
        }
    }
}

export default model