import { getUserData, getList } from './service';
import Mock from 'mockjs';
const business = [
    {
        name: '全部',
        code: '1',
    },
    {
        name: '基金',
    },
    {
        name: '手炒',
    },
    {
        name: '基金',
    },
    {
        name: '付费产品',
    },
    {
        name: 'PC',
    },
    {
        name: 'SNS',
    },
];
const dataDomain = [
    {
        name: '全部',
    },
    {
        name: '交易域',
    },
    {
        name: '电商域',
    },
];
const quotaTypes = [
    {
        name: '全部',
    },
    {
        name: '原子指标',
    },
    {
        name: '业务线定指标',
    },
    {
        name: '衍生指标',
    },
];
const statusList = [
    {
        name: '全部',
    },
    {
        name: '正常',
    },
    {
        name: '配置异常',
    },
    {
        name: '未实现',
    },
];
const dataSource = [
    {
        name: '全部',
    },
    {
        name: '未配置',
    },
    {
        name: 'Kylin',
    },
    {
        name: '汇总表',
    },
];

const model = {
    namespace: 'quotaList',

    state: {
        visible: false,
        business: business,
        dataDomain: dataDomain,
        quotaTypes: quotaTypes,
        statusList: statusList,
        dataSource: dataSource,

        principal: Mock.mock({
            'list|100': [
                {
                    name: '@cname',
                },
            ],
        }).list,

        tableList: (() => {
            return Mock.Random.range(1, 100).map((it, idx) => {
                return {
                    key: idx,
                    name: `完成名称`,
                    status: Math.floor(Math.random() * 3),
                    business: business.map((it) => it.name)[
                        Math.floor(Math.random() * business.length)
                    ],

                    business_process: 'business_process',

                    data_domain: dataDomain.map((it) => it.name)[
                        Math.floor(Math.random() * dataDomain.length)
                    ],

                    user: Mock.Random.cname(),
                };
            });
        })(),
    },

    reducers: {
        updateBusiness(state, { payload: business }) {
            return { ...state, business }; // state参数是引用类型，如果直接return state，dva会认为没有修改state，所有不会刷新
        },

        changeVisible(state, { payload: visible }) {
            return { ...state, ...visible };
        },
    },

    effects: {
        *getBusiness(paramas, { put, call }) {
            const res = yield call(getList);
            console.log('res', res);
            // 如果yield call的是一个Promise对象，那只有在Promise返回的是resolve方法的情况下，下面跟着的yield put及后面的代码才会执行，若返回了rejector则后面的代码则全部停止执行
            yield put({ type: 'updateBusiness', payload: res.data });
        },
    },
};

export default model;
