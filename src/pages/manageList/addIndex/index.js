import React, { useState } from 'react'
import { Modal, Button, Form, Input } from 'antd';
import { connect } from 'umi';

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 }
}

const AddIndex = props => {
    const {dispatch} = props
    const closeAddForm = () => {
        dispatch({
            type: 'quotaList/changeVisible',
            payload: {
                visible: false
            }
        })
    }

    console.log('props', props)
    return (
        <Modal title="添加指标" visible={ props.visible } onCancel={() => {closeAddForm()}}>
            <Form {...layout}>
                <Form.Item label="完整名称" name="完整名称">
                    <Input />
                </Form.Item>
                <Form.Item label="业务线" name="业务线">
                    <Input />
                </Form.Item>
                <Form.Item label="业务过程" name="业务过程">
                    <Input />
                </Form.Item>
                <Form.Item label="数据域" name="数据域">
                    <Input />
                </Form.Item>
                <Form.Item label="负责人" name="负责人">
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default connect(({quotaList}) => ({
    visible: quotaList.visible
}))(AddIndex)