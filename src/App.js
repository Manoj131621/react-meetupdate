import { Route, Switch} from "react-router-dom";
import AllMeetup from "./pages/AllMeetup";
import NewMeetup from "./pages/NewMeetup";
import Favourites from "./pages/Favourites";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      {/* <MainNavigation /> */}
      {/* <Router> */}
        <Switch>
          <Route path="/" exact>
            <AllMeetup/>
          </Route>
          <Route path="/new-meetup" exact>
            <NewMeetup/>
          </Route>
          <Route path="/favourites" exact>
            <Favourites/>
          </Route>
        </Switch>
      {/* </Router> */}
      {/* </MainNavigation> */}
    </Layout>
  );
}

export default App;