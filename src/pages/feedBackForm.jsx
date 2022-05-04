import React from 'react'
import { Banner } from '../components/banner'
import { NavBar } from '../components/NavBar'
import 'react-dyn-tabs/style/react-dyn-tabs.css'
import 'react-dyn-tabs/themes/react-dyn-tabs-card.css'
import { DynTabs } from '../components/dynTabs'
export const FeedBackForm = (props) => {
  
  return (
    <>
      <NavBar />
      <Banner />
      <DynTabs/>
    </>
    )
}