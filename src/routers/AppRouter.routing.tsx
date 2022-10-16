import { Route } from "wouter";
import { Layout } from "../components/Layout";

export const AppRouter = () => {
  return (
    <>
      <Route path="/planets/:planetName/:characteristicName">
        <Layout />
      </Route>
    </>
  );
};
