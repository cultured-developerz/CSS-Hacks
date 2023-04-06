import "./App.css";
import { Route } from "react-router-dom";
import LogInpage from "./Pages/LogInpage";
import ChatPage from "./Pages/ChatPage";

function App() {
  return (
    <div className="App">
      <Route path = "/" component={LogInpage} exact/>
      <Route path = "/chats" component={ChatPage}/>
    </div>
  );
}

export default App;
