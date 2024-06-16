import "./App.css";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import Trial from "./Pages/try";

function App() {
  return (
    <div className="App">
      {/* <Route path="/" component={Homepage} exact /> */}
      <Route path="/" component={Trial} exact />
      <Route path="/chats" component={Chatpage} />
    </div>
  );
}

export default App;
