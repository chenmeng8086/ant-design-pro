import React, { useState, useEffect } from 'react';
import { connect } from 'umi';
import { PageHeaderWrapper, PageContainer } from '@ant-design/pro-layout';
import TableBasic from './TableBasic';
import Tabs from './Tabs';

const PureData = props => {

  const{
    dispatch,
    pureData:{ tab_data, selectTag, tableData}
  } = props;

  const [tab_id, changeTabId] = useState(1)
  const [select_tag_id, changeTagId] = useState(['100'])


  //等同于 componentDidMount，componentDidUpdate，componentWillUnmount
  //获取tab数据
  useEffect(() => {
    dispatch({
      type: 'pureData/fetchTab'
    });
  }, []);


  //获取完整tagspan数据
  useEffect(() => {
    dispatch({
      type: 'pureData/fetchSelect'
    }) 
  }, []);

  
  //tagspan数据改变后，触发table数据刷新
  useEffect(() => {
    dispatch({
      type: 'pureData/fetchTable',
      params: {
        tag_ids: select_tag_id
      }
    })
  }, [select_tag_id]);


  //切换tagspan
  const handleChangeActive = (id, idx) => {
    const copy = JSON.parse(JSON.stringify(select_tag_id));
    if(copy.indexOf(id) > -1){
      copy.splice(copy.indexOf(id), 1)
    }else{
      copy.push(id)
    }
    changeTagId(copy)
  }
  
 

  return (
    <PageContainer>
      <Tabs 
        datasource={tab_data} 
        selectTagData={selectTag} 
        tabId={tab_id} 
        selectTagId={select_tag_id}
        changeTabId={
          async value => {
            //改变tab下属tapspan显示
            changeTabId(value)
            //重置tapsan
            changeTagId(['100'])
          }
        } 
        handleChangeActive={
          async id => {
            handleChangeActive(id)
          }
        } />
      <TableBasic tableData={tableData} tab_id={tab_id}/>
    </PageContainer>
  );
}

export default connect(({ pureData }) => ({
  pureData
}))(PureData);