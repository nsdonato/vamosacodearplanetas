import { Link, Route } from "wouter";

export const AppRouter = () => (
  <>
     <Route path="/">
        <Link href="/planets/jupiter">
        <a className="link">Ir a Jupiter</a>
        </Link>
     </Route>
    <Route path="/about">About Us</Route>
    <Route path="/planets/:name">
      {(params) => ( <>
        <h1>Hola, estas en {params.name}!</h1>
        <Link href="/">
        <a className="link">Volver</a>
        </Link>
      </> )}
    </Route>

  </>
);