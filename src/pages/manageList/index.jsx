import  React  from 'react'
import { connect } from 'umi';
import SelectTag from './selectControl'
import QuotaTable from './quoTable'
import { Card } from 'antd';
import { Divider } from 'antd';
import { Input } from 'antd';
import { Row, Col } from 'antd';
import style from './index.less'


class ManageList extends React.Component {
    state = {
        quotaName: '',
        quotaTypes: [
            {
                name: '全部'
            }, {
                name: '原子指标'
            }, {
                name: '业务线定指标'
            }, {
                name: '衍生指标'
            }
        ],
        statusList: [
            {
                name: '全部'
            }, {
                name: '正常'
            }, {
                name: '配置异常'
            }, {
                name: '未实现'
            }
        ],
        dataSource: [
            {
                name: '全部'
            }, {
                name: '未配置'
            }, {
                name: 'Kylin'
            }, {
                name: '汇总表'
            },

        ],

        tableList: [
            {
                name: '张三',
                status: 0,
                business: '手抄',
                business_process: '业务过程',
                data_domain: '数据域',
                user: '许杭州'
            }
        ]
    }

    componentDidMount () {
        console.log('props', this.props)
    }

    render () {
        return (
            <>
                <Card>
                    <SelectTag chage={() => {this.updateTableList}} tagList={this.props.business} name={'业务线'}></SelectTag>

                    <Divider />

                    <SelectTag tagList={this.props.dataDomain} name={'数据域'}></SelectTag>

                    <Divider />
                    
                    <Row>
                        <Col span={12}><SelectTag tagList={this.state.quotaTypes} name={'指标类型'}></SelectTag></Col>
                        <Col span={12}><SelectTag tagList={this.state.statusList} name={'状态'}></SelectTag></Col>
                    </Row>

                    <Divider />

                    <Row align="middle">
                        <Col span={12}><SelectTag tagList={this.state.dataSource} name={'数据源'}></SelectTag></Col>
                        <Col span={12}>
                            <Row>
                                <Col className={style.name}>负责人：</Col>
                                <Col span={12}><Input placeholder="请选择" /></Col>
                            </Row>
                        </Col>
                    </Row>
                </Card>

                <Card>
                    <QuotaTable tableData={this.state.tableList}></QuotaTable>
                </Card>
            </>
        )
    }

    updateTableList () {
        console.log('更新数据')
    }
}

export default  connect(({quotaList}) => ({
    business: quotaList.business,
    dataDomain: quotaList.business
}))(ManageList)