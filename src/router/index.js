import Vue from 'vue'
import Router from 'vue-router'
import MyPlotlyAllCharts from '@/components/MyPlotlyAllCharts'
import MyPlotlyDialogs from '@/components/MyPlotlyDialogs'
import Disclosures from '@/components/Disclosures'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyPlotlyDialogs',
      component: MyPlotlyDialogs
    },
    {
      path: '/admin',
      name: 'MyPlotlyAllCharts',
      component: MyPlotlyAllCharts
    },
    {
      path: '/disclosures/',
      name: 'Disclosures',
      component: Disclosures
    }
  ]
})
