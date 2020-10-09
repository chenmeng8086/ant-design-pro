import React, { useState, useEffect } from 'react';
import { connect } from 'umi';
import { Modal, Button, Form, Input, Select } from 'antd';

const { Option } = Select;

const formLayout = {
    labelCol: {
      span: 7,
    },
    wrapperCol: {
      span: 13,
    },
};

// const CreateForm = ({ dispatch, pureData:{ formDetailData, result }, ...props }) => {
const CreateForm = props => {
  
  const {
      modalVisible: modalVisible,
      onCancel: onCancel,
      onCancel: handleCancel,
      modalType: modalType,
      dataId: dataId
  } = props;

  const [form, form2, form3] = Form.useForm();
  
  const [formVals, setFormVals] = useState({
    name: '',
    business: '',
    datasource: '',
    principal: ''
  });
  
  //更新表单数据
  // useEffect(() => {
  //   dispatch({
  //     type: 'pureData/fetchForm',
  //     params: {
  //       'dataId': dataId
  //     }
  //   });
  // }, [dataId]);

  //保存表单
  // const handleUpdate = () => {
  //   dispatch({
  //     type: 'pureData/fetchUpdateForm',
  //     params: formVals
  //   });
  // }

  const renderTitle = () => {
    if(modalType == 1){
      return(
      <>{dataId ? '修改' : '添加'}业务过程</>
      )
    }else if(modalType == 2){
      return(
        <>{dataId ? '修改' : '添加'}事实表</>
      )
    }else if(modalType == 3){
      return(
        <>{dataId ? '修改' : '添加'}业务限定</>
      )
    }
  }

 


  const renderContent = () => {
   
    if(modalType == 1){
      return(
       
        <Form form={form} {...formLayout}>
          <Form.Item label="数据表：" rules={[{ required: true, message: '数据表未选择' }]}>
            <Select onChange={handleChangeSel}>
                <Option value="male1">male</Option>
                <Option value="female1">female</Option>
                <Option value="other1">other</Option>
            </Select>
          </Form.Item>
          <Form.Item label="业务过程：" rules={[{ required: true, message: '业务过程未选择' }]}>
            <Select onChange={handleChangeSel}>
              <Option value="male1">male</Option>
              <Option value="female1">female</Option>
              <Option value="other1">other</Option>
            </Select>
          </Form.Item>
        </Form>

      )
    }else if(modalType == 2){
      return(
        <Form form={form2} {...formLayout}>
          <Form.Item label="数据表：" rules={[{ required: true, message: '数据表未选择' }]}>
            <Select onChange={handleChangeSel}>
                <Option value="male1">male</Option>
                <Option value="female1">female</Option>
                <Option value="other1">other</Option>
            </Select>
          </Form.Item>
          <Form.Item label="业务过程：" rules={[{ required: true, message: '业务过程未选择' }]}>
            <Select onChange={handleChangeSel}>
              <Option value="male1">male</Option>
              <Option value="female1">female</Option>
              <Option value="other1">other</Option>
            </Select>
          </Form.Item>
        </Form>
      )
    }else if(modalType == 3){
      return(
        <Form form={form3} {...formLayout}>
          <Form.Item label="名称：" rules={[{ required: true, message: '名称未填写' }]}>
              <Input />
          </Form.Item>
          <Form.Item label="业务线：" rules={[{ required: true, message: '业务线未选择' }]}>
              <Select onChange={handleChangeSel}>
                  <Option value="male1">male</Option>
                  <Option value="female1">female</Option>
                  <Option value="other1">other</Option>
              </Select>
          </Form.Item>
          <Form.Item label="数据域：" rules={[{ required: true, message: '数据域未选择' }]}>
              <Select onChange={handleChangeSel}>
                  <Option value="male2">male</Option>
                  <Option value="female2">female</Option>
                  <Option value="other2">other</Option>
              </Select>
          </Form.Item>
          <Form.Item label="条件：" rules={[{ required: true, message: '负责人未选择' }]}>
              <Select onChange={handleChangeSel}>
                  <Option value="male3">male</Option>
                  <Option value="female3">female</Option>
                  <Option value="other3">other</Option>
              </Select>
          </Form.Item>
          <Form.Item label="条件间关系：" rules={[{ required: true, message: '名称未填写' }]}>
              <Input />
          </Form.Item>
        </Form>
      )
    }  
  }

  const renderFooter = () => {
      return(
          <>
            <Button onClick={() => handleCancel(false)} style={{ marginLeft: '15px' }}>取消</Button>
            <Button type="primary" onClick={() => handleUpdate()}>保存</Button>
          </>
      )
  }

  const handleChangeSel = (value) => {
    console.log(value)
  }

  return (
    <Modal
      destroyOnClose
      title={renderTitle()}
      visible={modalVisible}
      onCancel={() => handleCancel(false)}
      footer={renderFooter()}
    >
        {renderContent()}
    </Modal>
  );
};

export default CreateForm
// export default connect(({ pureData }) => ({
//   pureData
// }))(CreateForm);