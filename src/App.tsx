import { Header } from "@/components/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  const currentYear = new Date().getFullYear();

  return (
    <React.Fragment>
      <Header />
      <main className="container prose prose-xl">
        <Outlet />
      </main>
      <footer className="p-4 text-center">
        <p>
          Powered by{" "}
          <a href="https://openweathermap.org" className="underline">
            Open Weather
          </a>
        </p>
        <p>Mateusz Kwiatkowski &copy; {currentYear}</p>
      </footer>
    </React.Fragment>
  );
};

export { App };
