import React from 'react'
import MainLayout from 'layout/MainLayout'
import Hero from 'components/budget/Hero/Hero'
import BuddgetContent from 'components/budget/BuddgetContent/BuddgetContent'
const BudgetPage = () => {
  return (
    <MainLayout>
      <Hero />      
      <BuddgetContent></BuddgetContent>
      
    </MainLayout>
  )
}

export default BudgetPage