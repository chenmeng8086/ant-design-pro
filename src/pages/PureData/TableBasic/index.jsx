import React, { useState } from 'react';
import { Table, Tag, Card, Button, Modal } from 'antd';
import styles from './index.less';
import { PlusOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import CreateForm from './components/CreateForm'
const { confirm } = Modal;

const handleDel = (id) => {
    confirm({
        title: 'Are you sure delete this task?',
        icon: <ExclamationCircleOutlined />,
        content: 'Some descriptions',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
    });
}

const list = props => {
    const [createModalVisible, handleModalVisible] = useState(false);
    const [modalType, handleModalType] = useState(1);
    const [dataId, handleDataId] = useState('')
    const colums_obj = {
        '1': [
            {
                title: '业务过程名称',
                dataIndex: 'name',
                key: 'name',
                render: text => <a>{text}</a>,
            },
            {
                title: '业务线',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: '数据域',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: '负责人',
                key: 'tags',
                dataIndex: 'tags',
                render: tags => (
                <span>
                    {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
            
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
            
                    return (
                        <Tag color={color} key={tag}>
                        {tag.toUpperCase()}
                        </Tag>
                    );
                    })}
                </span>
                ),
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <span>
                    <a style={{
                        marginRight: 16,
                        }}
                        onClick={() => {
                            handleModalVisible(true, record.id);
                            handleModalType(1);
                            handleDataId(record.id)
                        }}>
                        编辑 
                    </a>
                    <a onClick={() => handleDel(record.id)}>删除</a>
                    </span>
                ),
            },
        ],
        '2': [
            {
                title: '事实表名称',
                dataIndex: 'name',
                key: 'name',
                render: text => <a>{text}</a>,
            },
            {
                title: '业务线',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: '业务过程',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: '数据域',
                key: 'tags',
                dataIndex: 'tags',
                render: tags => (
                <span>
                    {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
            
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
            
                    return (
                        <Tag color={color} key={tag}>
                        {tag.toUpperCase()}
                        </Tag>
                    );
                    })}
                </span>
                ),
            },
            {
                title: '负责人',
                dataIndex: 'author',
                key: 'author',
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <span>
                    <a style={{
                        marginRight: 16,
                        }}
                        onClick={() => {
                            handleModalVisible(true, record.id);
                            handleModalType(2);
                            handleDataId(record.id)
                        }}>
                        编辑 
                    </a>
                    <a onClick={() => handleDel(record.id)}>删除</a>
                    </span>
                ),
            },
        ],
        '3': [
            {
                title: '业务限定名称',
                dataIndex: 'name',
                key: 'name',
                render: text => <a>{text}</a>,
            },
            {
                title: '业务线',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: '数据域',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: '条件',
                key: 'tags',
                dataIndex: 'tags',
                render: tags => (
                <span>
                    {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
            
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
            
                    return (
                        <Tag color={color} key={tag}>
                        {tag.toUpperCase()}
                        </Tag>
                    );
                    })}
                </span>
                ),
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <span>
                    <a style={{
                        marginRight: 16,
                        }}
                        onClick={() => {
                            handleModalVisible(true, record.id);
                            handleModalType(3);
                            handleDataId(record.id)
                        }}>
                        编辑 
                    </a>
                    <a onClick={() => handleDel(record.id)}>删除</a>
                    </span>
                ),
            },
        ]
    };
  
    const {
        tableData,
        tab_id
    } = props
    
    const buttonFunc = () => {
        if(tab_id == 1){
            return (<Button icon={<PlusOutlined />} onClick={() => {handleModalVisible(true); handleModalType(1); handleDataId('')} }>添加业务过程</Button>)
        }else if(tab_id == 2){
            return (<Button icon={<PlusOutlined />} onClick={() => {handleModalVisible(true); handleModalType(2); handleDataId('')} }>添加事实表</Button>)
        }else if(tab_id == 3){
            return (<Button icon={<PlusOutlined />} onClick={() => {handleModalVisible(true); handleModalType(3); handleDataId('')} }>添加业务限定</Button>)
        }
    }

    return(
        <Card className={styles.container}>
            <div>
                {buttonFunc()}
                <div id="components-table-demo-basic">
                    <Table columns={colums_obj[tab_id]} dataSource={tableData} />
                </div>
            </div>
            <CreateForm 
                onCancel={() => handleModalVisible(false)} 
                modalVisible={createModalVisible}
                modalType={modalType}
                dataId={dataId}
            />
        </Card>
    )
}
export default list
    

