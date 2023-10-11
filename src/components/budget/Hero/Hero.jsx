import React  from 'react'
import './Hero.css'
import { Coins, Wallet, CreditCard } from 'phosphor-react'
import BudgetNumber from './BudgetNumber'
const Hero = () => {
    
    return (
        <div className='hero_budget'>
            <div className='hero_budget-bg'>
                <img src="https://unsplash.it/1200/400" alt="random img" />
            </div>
            <div className="container">
                <div className="hero_budget-numbers">
                    <BudgetNumber
                        money={"500$"}
                        title={"Total Money"}>
                        <Coins weight='duotone'/>
                    </BudgetNumber>
                    <BudgetNumber
                        money={"500$"}
                        title={"Total income"}>
                        <Wallet weight='duotone'/>
                        
                    </BudgetNumber>
                    <BudgetNumber
                        money={"500$"}
                        title={"Total Expanse"}>
                        <CreditCard weight='duotone' />

                    </BudgetNumber>
                
                </div>
            </div>
            
        </div>
    )
}

export default Hero
