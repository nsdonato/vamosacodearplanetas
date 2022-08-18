import { Link, Route, Switch } from "wouter";
import { MenuPlanets } from '../components/MenuPlanets';

export const AppRouter = () => (
  <>
    {/*TODO Hacer un componente navbar 
    NAVBAR CASERO */}

    
    <MenuPlanets></MenuPlanets>



    <Route path="/planets/jupiter">
      <h1>Hola estas en Jupiter bienvenido</h1>
    </Route>
    <Route path="/planets/earth">
      <h1>Hola estas en la tierra bienvenido</h1>

    </Route>
    <Route path="/planets/mercury">
      <h1>Hola estas en Mercurio bienvenido</h1>

    </Route>
    <Route path="/planets/mars">
      <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, ipsam?</h1>

    </Route>
    <Route path="/planets/saturn">
    <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, ipsam?</h1>

    </Route>
    <Route path="/planets/uranus">
    <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, ipsam?</h1>

    </Route>
    <Route path="/planets/neptune">
    <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, ipsam?</h1>

    </Route>
    <Route path="/about">About Us</Route>
  </>
);
