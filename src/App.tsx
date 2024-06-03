import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="">
      <Header />
      <main className="max-w-7xl mx-auto mt-10 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
