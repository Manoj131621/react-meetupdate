import { Route, Switch} from "react-router-dom";
import AllMeetup from "./pages/AllMeetup";
import NewMeetup from "./pages/NewMeetup";
import Favourites from "./pages/Favourites";
import MainNavigation from "./components/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
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
    </div>
  );
}

export default App;