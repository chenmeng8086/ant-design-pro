import styles from './index.less';

const tags = props => {
    const {
        selectTagData,
        handleChangeActive,
        tabId,
        selectTagId
    } = props
  
    return(
        <>{
            selectTagData.map((paritem, index) => {
                return(
                    <div className={paritem.tab_id == tabId ? styles.is_show : styles.is_hide} key={index}>
                        {
                            paritem.tag_detail.map((item) => {
                                return(
                                    <div className={styles.tagsContainer} key={item.tag_id}>
                                        <span>{item.tag_name}：</span>
                                        <ul className={styles.ul}>
                                        {
                                            item.tag_detail.map(subitem => {
                                                return(
                                                    <li key={subitem.id} 
                                                        data-id={subitem.id}
                                                        data-group={selectTagId} 
                                                        className={selectTagId.indexOf(subitem.id) > -1 ? styles.active : ''}
                                                        onClick={ () => handleChangeActive(subitem.id) }
                                                    >{subitem.name}</li>
                                                )
                                            })
                                        }
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
                
            })
        }</>
    )
}

export default tags