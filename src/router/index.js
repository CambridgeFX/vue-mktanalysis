import Vue from 'vue'
import Router from 'vue-router'
import MyPlotlyAllCharts from '@/components/MyPlotlyAllCharts'
// import MyPlotlyCards from '@/components/MyPlotlyCards'
import TabsHome from '@/components/pages/TabsHome'
import TabsPairs from '@/components/pages/TabsPairs'
import TabsGlobals from '@/components/pages/TabsGlobals'
import TabsDisclosures from '@/components/pages/TabsDisclosures'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TabsHome',
      component: TabsHome
    },
    {
      path: '/home',
      name: 'TabsHome',
      component: TabsHome
    },
    {
      path: '/pairs',
      name: 'TabsPairs',
      component: TabsPairs
    },
    {
      path: '/globals',
      name: 'TabsGlobals',
      component: TabsGlobals
    },
    {
      path: '/disclosures',
      name: 'TabsDisclosures',
      component: TabsDisclosures
    },
    {
      path: '/admin',
      name: 'MyPlotlyAllCharts',
      component: MyPlotlyAllCharts
    },
  ]
})
