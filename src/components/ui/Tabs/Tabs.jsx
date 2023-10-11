import React from 'react'
import './Tabs.css'
const Tab = () => {
    return (
        <div className='tabs'>
            <div className="tabs_titles">
                <div className="tab_title active">Title</div>
                <div className="tab_title">Title</div>
                <div className="tab_title">Title</div>
            </div>
            <div className="tab_content">
                Content
            </div>
        </div>
    )
}

export default Tab
