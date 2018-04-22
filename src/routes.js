import Home from './Views/Home'
import Meny from './Views/Meny'
import Gallery from './Views/Gallery'
import Story from './Views/Story'
import About from './Views/About'
import ColdSandwich from './Components/ColdSandwich'
import WarmSandwich from './Components/WarmSandwich'
import SnacksAndDishes from './Components/SnacksAndDishes'
import Breakfast from './Components/Breakfast'
import Drinks from './Components/Drinks'

const routes = {
  pageRoutes:[
  {name: 'Home', exact: true, path: '/', component: Home},
  {name: 'Meny', exact: false, path: '/meny', component: Meny},
  {name: 'Gallery', exact: false, path: '/gallery', component: Gallery},
  {name: 'Story', exact: false, path: '/story', component: Story},
  {name: 'About', exact: false, path: '/about', component: About}
],
  subMenu:[
  {name: 'Breakfast', exact: false, path: '/meny/breakfast', component: Breakfast},
  {name: 'ColdSandwich', exact: false, path: '/meny/coldsandwich', component: ColdSandwich},
  {name: 'WarmSandwich', exact: false, path: '/meny/warmsandwich', component: WarmSandwich},
  {name: 'SnacksAndDishes', exact: false, path: '/meny/snacksanddishes', component: SnacksAndDishes},
    {name: 'Drinks', exact: false, path: '/meny/drinks', component: Drinks}
  ]
}


export default routes
