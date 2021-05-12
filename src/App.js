import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import Header from "./components/header/header";
import Homepage from "./pages/homePage/homepage-component";
import ShopPage from "./pages/shop/shop-component";
import SignInAndSignUpPage from "./pages/signIn-and-signUp/signIn-and-signUp";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
