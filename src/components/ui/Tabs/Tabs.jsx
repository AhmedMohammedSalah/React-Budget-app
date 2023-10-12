import React, { useState } from 'react'
import './Tabs.css'
const Tabs = ( { children, defultTab = 1 } ) => {
    const tabs = children;
    const tabsTitles = tabs.map( t => t.props.title||'' )
    const tabsContent = tabs.map( t => t.props.children)
    const [ActiveTab, setActiveTab] = useState(defultTab);
    return (
        <div className='tabs'>
            <div className="tabs_titles">
                {tabsTitles.map( ( title, ix ) => 
                    (
                        <div key={`tab_title-${ix+1}`} className={`tab_title ${ix+1 ===ActiveTab?'active':''}`} onClick={()=>{setActiveTab(ix+1)}}>{title}</div>
                    )
                )}
            </div>
            <div className="tab_content">
                {tabsContent[ActiveTab-1]}
            </div>
        </div>
    )
}

export default Tabs