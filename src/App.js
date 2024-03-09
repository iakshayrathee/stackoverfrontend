import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./AllRoutes";
import { fetchAllQuestions } from "./actions/question";
import { fetchAllUsers } from "./actions/users";

function App() {
  const [theme, setTheme] = useState("light");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const [slideIn, setSlideIn] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 760) {
      setSlideIn(false);
    }
  }, []);

  useEffect(() => {
    const updateTheme = () => {
      const currentHour = new Date().getHours();
      if (currentHour >= 6 && currentHour < 19) {
        setTheme("light-theme");
      } else {
        setTheme("dark-theme");
      }
    };

    updateTheme();

    const intervalId = setInterval(updateTheme, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const handleSlideIn = () => {
    if (window.innerWidth <= 760) {
      setSlideIn((state) => !state);
    }
  };

  return (
    <div className={`App ${theme}`}>
      <Router>
        <Navbar handleSlideIn={handleSlideIn} />
        <AllRoutes slideIn={slideIn} handleSlideIn={handleSlideIn} />
      </Router>
    </div>
  );
}

export default App;
