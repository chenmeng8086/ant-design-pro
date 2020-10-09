import { Tabs, Card } from 'antd';
import SelectTag from '../SelectTag';

const { TabPane } = Tabs;

const TabsComponent = props => {
    const {
        datasource,
        selectTagData,
        changeTabId,
        handleChangeActive,
        tabId,
        selectTagId
    } = props
    return (
        <Card>
            <Tabs defaultActiveKey="1" onChange={changeTabId}>
                {
                    datasource.map(item => {
                        return (
                            <TabPane tab={item.name} key={item.value}></TabPane>
                        )
                    })
                }
            </Tabs>
            <SelectTag 
                selectTagData={selectTagData} 
                tabId={tabId} 
                selectTagId={selectTagId} 
                handleChangeActive={handleChangeActive}/>
        </Card>
    )
}
export default TabsComponent
