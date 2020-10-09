import request from 'umi-request';

function getUserData (prmarse) {
    return request.get('', {
        method: 'get'
    })
}

async function getList (paramas) {
        const res = await new Promise((resolved, rejected) => {
            setTimeout(() => {
                let ress = {
                    code: 200,
                    data: [
                        {
                            id: 'id-1',
                            name: 'name-1',
                            code: 'code-1'
                        }, {
                            id: 'id-2',
                            name: 'name-2',
                            code: 'code-2'
                        }, {
                            id: 'id-3',
                            name: 'name-3',
                            code: 'code-3'
                        }, {
                            id: 'id-4',
                            name: 'name-4',
                            code: 'code-4'
                        }
                    ]
                }
                resolved(ress)
            }, 5000)
        })
        return res
}

export {
    getUserData,
    getList
}