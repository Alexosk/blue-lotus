import { Breakfast } from "./Components/Breakfast";
import { ColdSandwich } from "./Components/ColdSandwich";
import { Contact } from "./Views/Contact";
import { Dishes } from "./Components/Dishes";
import { Drinks } from "./Components/Drinks";
import { Home } from "./Views/Home";
import { Lunch } from "./Components/Lunch";
import { Meny } from "./Views/Meny";
import { PhotoAlbum } from "./Views/PhotoAlbum";
import { Rent } from "./Views/Rent";
import { RentWrapper } from "./Views/RentWrapper";
import { Snacks } from "./Components/Snacks";
import { Story } from "./Views/Story";
import { TableBooking } from "./Views";
import { WarmSandwich } from "./Components/WarmSandwich";

const routes = {
  pageRoutes: [
    { name: "Home", exact: true, path: "/", component: Home },
    { name: "Meny", exact: false, path: "/meny", component: Meny },
    {
      name: "PhotoAlbum",
      exact: false,
      path: "/gallery",
      component: PhotoAlbum,
    },
    { name: "Story", exact: false, path: "/historia", component: Story },
    { name: "Contact", exact: false, path: "/contact", component: Contact },
    { name: "Rent", exact: false, path: "/rent", component: RentWrapper },
  ],
  subMenu: [
    {
      name: "Breakfast",
      exact: false,
      path: "/meny/breakfast",
      component: Breakfast,
    },
    { name: "Lunch", exact: false, path: "/meny/lunch", component: Lunch },
    {
      name: "ColdSandwich",
      exact: false,
      path: "/meny/coldsandwich",
      component: ColdSandwich,
    },
    {
      name: "WarmSandwich",
      exact: false,
      path: "/meny/warmsandwich",
      component: WarmSandwich,
    },
    { name: "Dishes", exact: false, path: "/meny/dishes", component: Dishes },
    { name: "Snacks", exact: false, path: "/meny/snacks", component: Snacks },
    { name: "Drinks", exact: false, path: "/meny/drinks", component: Drinks },
    { name: "Abbonera", exact: false, path: "/rent/abbonera", component: Rent },
    {
      name: "Boka Bord",
      exact: false,
      path: "/rent/bokabord",
      component: TableBooking,
    },
  ],
};

export default routes;
