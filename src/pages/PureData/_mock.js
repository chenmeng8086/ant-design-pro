// eslint-disable-next-line import/no-extraneous-dependencies
const titles = [
    'Alipay',
    'Angular',
    'Ant Design',
    'Ant Design Pro',
    'Bootstrap',
    'React',
    'Vue',
    'Webpack',
];
const avatars = [
    'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png', // Alipay
    'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png', // Angular
    'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png', // Ant Design
    'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png', // Ant Design Pro
    'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png', // Bootstrap
    'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png', // React
    'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png', // Vue
    'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png', // Webpack
];
const covers = [
    'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
    'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
    'https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png',
    'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
];
const desc = [
    '那是一种内在的东西， 他们到达不了，也无法触及的',
    '希望是一个好东西，也许是最好的，好东西是不会消亡的',
    '生命就像一盒巧克力，结果往往出人意料',
    '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
    '那时候我只会想自己想要什么，从不想自己拥有什么',
];
const user = [
    '付小小',
    '曲丽丽',
    '林东东',
    '周星星',
    '吴加好',
    '朱偏右',
    '鱼酱',
    '乐哥',
    '谭小仪',
    '仲尼',
];

function fakeList(count) {
    const list = [];

    for (let i = 0; i < count; i += 1) {
        list.push({
            id: `fake-list-${Math.random()
          .toString(36)
          .slice(2, 6)}${i}`,
            owner: user[i % 10],
            title: titles[i % 8],
            avatar: avatars[i % 8],
            cover: parseInt(`${i / 4}`, 10) % 2 === 0 ? covers[i % 4] : covers[3 - (i % 4)],
            status: ['active', 'exception', 'normal'][i % 3],
            percent: Math.ceil(Math.random() * 50) + 50,
            logo: avatars[i % 8],
            href: 'https://ant.design',
            updatedAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i).getTime(),
            createdAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i).getTime(),
            subDescription: desc[i % 5],
            description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
            activeUser: Math.ceil(Math.random() * 100000) + 100000,
            newUser: Math.ceil(Math.random() * 1000) + 1000,
            star: Math.ceil(Math.random() * 100) + 100,
            like: Math.ceil(Math.random() * 100) + 100,
            message: Math.ceil(Math.random() * 10) + 10,
            content: '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
            members: [{
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
                    name: '曲丽丽',
                    id: 'member1',
                },
                {
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
                    name: '王昭君',
                    id: 'member2',
                },
                {
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
                    name: '董娜娜',
                    id: 'member3',
                },
            ],
        });
    }

    return list;
}

function getFakeList(req, res) {
    const params = req.query;
    const count = params.count * 1 || 20;
    const result = fakeList(count);
    return res.json(result);
}

const tab_data = [{
    'name': '业务过程',
    'value': 1
}, {
    'name': '事实表',
    'value': 2
}, {
    'name': '业务限定',
    'value': 3
}];

const select_data = [
    {
        "tab_id": 1,
        "tag_detail": [{
            'tag_id': 'dd',
            'tag_name': '业务线',
            'tag_detail': [{
                'id': '100',
                'name': '全部'
            }, {
                'id': '101',
                'name': '手炒'
            }, {
                'id': '102',
                'name': '基金'
            }]
        },{
            'tag_id': 'da',
            'tag_name': '业务线',
            'tag_detail': [{
                'id': '100',
                'name': '全部'
            }, {
                'id': '201',
                'name': '手炒'
            }, {
                'id': '202',
                'name': '基金'
            }]
        }]
    }, {
        "tab_id": 2,
        "tag_detail": [{
            'tag_id': 'ds',
            'tag_name': '业务线',
            'tag_detail': [{
                'id': '100',
                'name': '全部'
            }, {
                'id': '303',
                'name': '交易域'
            }, {
                'id': '304',
                'name': '电商域'
            }]
        }]
    }, {
        "tab_id": 3,
        "tag_detail": [{
            'tag_id': 'dx',
            'tag_name': '业务线',
            'tag_detail': [{
                'id': '100',
                'name': '全部'
            }, {
                'id': '403',
                'name': '交易域'
            }, {
                'id': '404',
                'name': '电商域'
            }]
        }]
    }
];

const table_data = [
    {
        id: '01',
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        id: '02',
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        id: '03',
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

const form_data = {
    'name': '测试数据'
}

const result = {
    'status_code': 200,
    'status_msg': '更新成功'
}

function getTabData(req, res) {
    return res.json(tab_data)
}

function getSelectData(req, res) {
    return res.json(select_data)
}

function getTableData(req, res) {
    return res.json(table_data)
}

function getFormData(req, res) {
    return res.json(form_data)
}

function saveFormData(req, res) {
    return res.json(result)
}

export default {
    'GET  /api/get_tab_data': getTabData,
    'GET  /api/get_select_data': getSelectData,
    'POST  /api/get_table_data': getTableData,
    'POST  /api/get_form_data': getFormData,
    'POST  /api/save_form_data': saveFormData
};
