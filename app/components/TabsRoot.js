import React, { Component } from 'react';
import { TabBarIOS } from 'react-native';

import Button from './Button'

import RecipesList from '../components/RecipesList'
import StockList from '../components/StockList'
import OrderList from '../components/OrderList'

class Tabs extends Component {
   _changeTab(i){
      const { changeTab } = this.props;
      changeTab(i)
   }

   _renderTabContent(key){
      switch (key) {
         case 'recipeList':
         return <RecipesList _goBack={this.props._handleBackAction} _handleNavigate={this.props._handleNavigate}/>
         case 'stockList':
         return <StockList _handleNavigate={this.props._handleNavigate}/>
         case 'orderList':
         return <OrderList />
      }
   }

   render(){
      const tabs = this.props.tabs.tabs.map((tab, i) => {
         return (
            <TabBarIOS.Item key={tab.key}
               selectedIcon={tab.selectedIcon}
               title={tab.title}
               onPress={() => this._changeTab(i)}
               selected={this.props.tabs.index === i}>
               {this._renderTabContent(tab.key)}
            </TabBarIOS.Item>
         )
      })

      return (
         <TabBarIOS tintColor='black'>
            {tabs}
         </TabBarIOS>
      )
   }
}

export default Tabs
