import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import Header from "./components/header/header";
import Homepage from "./pages/homePage/homepage-component";
import ShopPage from "./pages/shop/shop-component";
// import { useHistory } from "react-router-dom";

// const HastsPage = () => {
//   const history = useHistory();
//   return (
//     <div>
//       <h1>Hats Page</h1>
//       <button onClick={() => history.push("/")}>Back</button>
//     </div>
//   );
// };

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
