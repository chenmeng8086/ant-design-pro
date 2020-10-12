import  React  from 'react'
import { connect } from 'umi';
import SelectTab from './selectControl'
import QuotaTable from './quoTable'
import { Card } from 'antd';
import style from './index.less'
import { PageContainer } from '@ant-design/pro-layout';
import AddIndex from './addIndex/index'


class ManageList extends React.Component {
    componentDidMount () {
        console.log('props', this.props)
    }

    render () {
        return (
            <>
                <PageContainer>
                    <SelectTab></SelectTab>

                    <Card>
                        <QuotaTable tableData={this.props.tableList}></QuotaTable>
                    </Card>
                </PageContainer>

                <AddIndex></AddIndex>
            </>
        )
    }
}

export default  connect(({quotaList}) => ({
    tableList: quotaList.tableList
}))(ManageList)