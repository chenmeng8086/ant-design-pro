import React, { useState } from 'react'
import { Modal, Button, Form, Input } from 'antd';
import { connect } from 'umi';

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

    return (
        <Modal title="添加指标" visible={ props.visible } onCancel={() => {closeAddForm()}}>
            <Form>
                <Form.Item>
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default connect(({quotaList}) => ({
    visible: quotaList.visible
}))(AddIndex)