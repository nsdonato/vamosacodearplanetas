import { Link, Route, Switch } from "wouter";

export const AppRouter = () => (
  <>
    {/*TODO Hacer un componente navbar 
    NAVBAR CASERO */}

    <ul>
      <li>
        <Link href="/planets/jupiter">
          <a  className="link">
            Jupiter
          </a>
        </Link>
      </li>
      <li>
        <Link href="/planets/jupiter">
          <a  className="link">
            Venus
          </a>
        </Link>
      </li>
      <li>
        <Link href="/planets/earth">
          <a  className="link">
            Earth
          </a>
        </Link>
      </li>
      <li>
        <Link href="/planets/mercury">
          <a  className="link">
            Mercury
          </a>
        </Link>
      </li>
      <li>
        <Link href="/planets/mars">
          <a  className="link">
            Mars
          </a>
        </Link>
      </li>
      <li>
        <Link href="/planets/uranus">
          <a  className="link">
            Uranus
          </a>
        </Link>
      </li>
      <li>
        <Link href="/planets/neptune">
          <a  className="link">
            Neptune
          </a>
        </Link>
      </li>
      <li>
        <Link href="/planets/saturn">
          <a  className="link">
            Saturn
          </a>
        </Link>
      </li>
    </ul>

    
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
