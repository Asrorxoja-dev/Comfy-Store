import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Header } from "../components";

function HomeLayout() {
  return (
    <div >
      <Header/>
        <Navbar />
      <main className="mt-16">
        <Outlet />
      </main>
    </div>
  );
}

export default HomeLayout;
