import React from 'react';
import { Tag, Card, Divider, Row, Col, Input, Select } from 'antd';
import style from './index.less';
import { connect } from 'umi';

const { Option } = Select;

const { CheckableTag } = Tag;

class SelectTag extends React.Component {
    constructor(props) {
        super();
        this.state = {
            name: props.name || 'name',
            checkedIndex: 0,
        };
    }

    render() {
        return (
            <>
                <span className={style.tag_name}>{this.state.name}：</span>
                {this.props.tagList &&
                    this.props.tagList.map((it, index) => {
                        return (
                            <CheckableTag
                                style={{ padding: '5px 7px' }}
                                key={index}
                                checked={this.state.checkedIndex === index ? true : false}
                                onChange={(e) => {
                                    this.changeChecked(it.name, index);
                                }}
                            >
                                {it.name}
                            </CheckableTag>
                        );
                    })}
            </>
        );
    }

    changeChecked(value, index) {
        this.setState({ checkedIndex: index });
        // this.props.change()
    }

    getList(e) {
        // const { dispatch } = this.props
        // dispatch({
        //     type: 'quotaList/getBusiness'
        // })
    }
}

class selectTab extends React.Component {
    render() {
        return (
            <Card>
                <SelectTag tagList={this.props.business} name={'业务线'}></SelectTag>

                <Divider />

                <SelectTag tagList={this.props.dataDomain} name={'数据域'}></SelectTag>

                <Divider />

                <Row>
                    <Col span={12}>
                        <SelectTag tagList={this.props.quotaTypes} name={'指标类型'}></SelectTag>
                    </Col>
                    <Col span={12}>
                        <SelectTag tagList={this.props.statusList} name={'状态'}></SelectTag>
                    </Col>
                </Row>

                <Divider />

                <Row align="middle">
                    <Col span={12}>
                        <SelectTag tagList={this.props.dataSource} name={'数据源'}></SelectTag>
                    </Col>
                    <Col span={12}>
                        <Row>
                            <Col className={style.user_name}>负责人：</Col>
                            <Col span={12}>
                                <Select
                                    defaultValue={this.props.principal[0].name}
                                    style={{ width: 120 }}
                                    size="small"
                                >
                                    {this.props.principal.map((it, index) => {
                                        return (
                                            <Option value={it.name} key={index}>
                                                {it.name}
                                            </Option>
                                        );
                                    })}
                                </Select>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
        );
    }
}

export default connect(({ quotaList }) => ({
    business: quotaList.business,
    dataDomain: quotaList.business,
    quotaTypes: quotaList.quotaTypes,
    statusList: quotaList.statusList,
    dataSource: quotaList.dataSource,
    principal: quotaList.principal,
}))(selectTab);
