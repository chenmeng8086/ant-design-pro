import React from 'react';
import { Tag } from 'antd';
import style from './index.less'
import { connect } from 'umi';


const { CheckableTag } = Tag

class SelectControl extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            name: props.name || 'name',
            checkedIndex: 0
        }
    }

    render () {
        return (
            <>
                <span className={style.name}>{ this.state.name }：</span>
                {
                    this.props.tagList && this.props.tagList.map((it, index) => {
                        return <CheckableTag
                                    style={{padding: '5px 7px'}}
                                    key={index}     
                                    checked={this.state.checkedIndex === index ? true : false}
                                    onChange={(e) => {this.changeChecked(it.name, index)}}
                                >
                                    {it.name}
                                </CheckableTag>
                    })
                }
            </>
        )
    }

    changeChecked (value, index) {
        console.log('props', this.props)
        this.setState({ checkedIndex: index })
        // this.props.change()
    }

    getList (e) {
        // const { dispatch } = this.props
        // dispatch({
        //     type: 'quotaList/getBusiness'
        // })
    }
}

export default connect(({quotaList}) => ({
    quotaList
}))(SelectControl)