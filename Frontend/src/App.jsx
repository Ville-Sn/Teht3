import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalState from "../context/GlobalState";

//components
import Header from "../components/Header";
import Footer from "../components/Footer";

//pages
import FrontPage from "../components/pages/FrontPage";
import AthleteEdit from "../components/pages/AthleteEdit";
import AthleteList from "../components/pages/AthleteList";
import AthleteAdd from "../components/pages/AthleteAdd";
import Info from "../components/pages/Info";

function App() {
  return (
    <>
      <GlobalState>
        <Router>
          <div className="App">
            <Header />
            <div>
              <Routes>
                <Route path="/" element={<FrontPage />} />
                <Route path="/athlete/:id" element={<AthleteEdit />} /> 
                <Route path="/athleteList" element={<AthleteList />} />
                <Route path="/athleteAdd" element={<AthleteAdd />} />
                <Route Path="/info" element={<Info />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </GlobalState>
    </>
  );
}

export default App;
