import React from 'react'
import { Tabs, Tab } from 'components/ui'
import Transactions from 'components/budget/BuddgetContent/Transactions/Transactions'

const BuddgetContent = () => {
    return (
        <div>
            <Tabs>
                <Tab title='Data'>
                    <Transactions/>
                </Tab>
                <Tab title='Income'>
                    content Income
                </Tab>
                <Tab title='Expanses'>
                    content Expanses
                </Tab>

            </Tabs>
        </div>
    )

    
}

export default BuddgetContent
