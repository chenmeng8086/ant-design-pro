import request from 'umi-request';

export async function queryTabData(params) {
    return request('/api/get_tab_data', {
        params
    })
}

export async function querySelectData(params) {
    return request('/api/get_select_data', {
        params
    })
}

export async function queryTableData(params) {
    return request('/api/get_table_data', {
        method: 'POST',
        data: { ...params }
    })
}

export async function queryFormData(params) {
    return request('/api/get_form_data', {
        method: 'POST',
        data: { ...params }
    })
}

export async function saveFormData(params) {
    return request('/api/save_form_data', {
        method: 'POST',
        data: { ...params }
    })
}