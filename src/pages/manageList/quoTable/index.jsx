import React from 'react';
import { Card } from 'antd';
import { Button } from 'antd';
import { Table, Tag, Space } from 'antd';

class QuotTable extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            tableData: props.tableData || [],
            tableHead: [
                {
                    title: '完整名称',
                    dataIndex: 'name',
                    key: 'name',
                    render: (text, record) => <a>
                        {record.name}
                    </a>,
                  },
                  {
                    title: '状态',
                    dataIndex: 'status',
                    key: 'status',
                  },
                  {
                    title: '业务线',
                    dataIndex: 'business',
                    key: 'business',
                  },
                  {
                    title: 'business_process',
                    key: 'business_process',
                    dataIndex: 'business_process'
                  },
                  {
                    title: 'data_domain',
                    key: 'data_domain',
                    dataIndex: 'data_domain'
                  },
                  {
                    title: '负责人',
                    key: 'user',
                    dataIndex: 'user'
                  },
                  {
                    title: '操作',
                    key: 'action',
                    render: (text, record) => (
                      <Space size="middle">
                        <a>编辑</a>
                        <a>删除</a>
                      </Space>
                    )
                  }
            ]
        }
    }

    render () {
        return (
            <Card>
                <Button style={{marginBottom: '10px'}}>添加指标</Button>
                <Table
                    columns={this.state.tableHead}
                    dataSource={this.state.tableData}
                ></Table>
            </Card>
        )
    }
}

export default QuotTable