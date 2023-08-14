import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";

// OPT: Add setting to local storage
// const getStorageTheme = () => {
//   let theme = "light-theme";
//   if (localStorage.getItem("theme")) {
//     theme = localStorage.getItem("theme");
//   }
//   return theme;
// };

function App() {
  const [theme, setTheme] = useState("light-theme");
  // OPT: Load state from local storage
  // const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      return;
    }
    setTheme("light-theme");
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  // OPT: UseEffect from local storage
  // useEffect(() => {
  //   document.documentElement.className = theme;
  //   localStorage.setItem("theme", theme);
  // }, [theme]);

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn" onClick={toggleTheme}>
            toggle theme
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((article) => {
          return <Article key={article.id} {...article} />;
        })}
      </section>
    </main>
  );
}

export default App;
