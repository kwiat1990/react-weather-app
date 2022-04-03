import { ICON_SIZE } from "@/const";
import React from "react";
import { render } from "react-dom";
import { IconContext } from "react-icons";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "./App";
import { FavsProvider } from "./context/favs.context";
import "./main.css";
import { About } from "./routes/About";
import { Fav } from "./routes/Fav";
import { Home } from "./routes/Home";
import { NotFound } from "./routes/NotFound";

render(
  <React.StrictMode>
    <BrowserRouter>
      <IconContext.Provider value={{ size: ICON_SIZE.LARGE, className: "hover:text-blue-700" }}>
        <FavsProvider>
          <Routes>
            <Route element={<App />}>
              <Route path="/" element={<Home />} />
              <Route path="/fav" element={<Fav />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </FavsProvider>
      </IconContext.Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
