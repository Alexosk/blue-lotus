import Home from './Views/Home'
import Meny from './Views/Meny'
import PhotoAlbum from './Views/PhotoAlbum'
import Story from './Views/Story'
import Contact from './Views/Contact'
import ColdSandwich from './Components/ColdSandwich'
import WarmSandwich from './Components/WarmSandwich'
import Dishes from './Components/Dishes'
import Snacks from './Components/Snacks'
import Breakfast from './Components/Breakfast'
import Drinks from './Components/Drinks'
import Lunch from './Components/Lunch'

const routes = {
  pageRoutes:[
  {name: 'Home', exact: true, path: '/', component: Home},
  {name: 'Meny', exact: false, path: '/meny', component: Meny},
  {name: 'PhotoAlbum', exact: false, path: '/gallery', component: PhotoAlbum},
  {name: 'Story', exact: false, path: '/historia', component: Story},
  {name: 'Contact', exact: false, path: '/contact', component: Contact}
],
  subMenu:[
  {name: 'Breakfast', exact: false, path: '/meny/breakfast', component: Breakfast},
  {name: 'Lunch', exact: false, path: '/meny/lunch', component: Lunch},
  {name: 'ColdSandwich', exact: false, path: '/meny/coldsandwich', component: ColdSandwich},
  {name: 'WarmSandwich', exact: false, path: '/meny/warmsandwich', component: WarmSandwich},
  {name: 'Dishes', exact: false, path: '/meny/dishes', component: Dishes},
  {name: 'Snacks', exact: false, path: '/meny/snacks', component: Snacks},
  {name: 'Drinks', exact: false, path: '/meny/drinks', component: Drinks}
  ]
}


export default routes
