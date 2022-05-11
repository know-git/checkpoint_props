import Profile from "../Profile/Profile.js";
import pImg from "../../ProfilePic.jpg";
import "./app.css";
function App() {
  return (
    <div className="App">
      <Profile
        fullName="Ahmed El Ajmi"
        bio="Bachelor degree in English"
        profession="English Tutor/Future Web developer"
        imge={pImg}
      />
    </div>
  );
}

export default App;
