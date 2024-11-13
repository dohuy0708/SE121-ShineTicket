import React from "react";
import { Outlet } from "react-router-dom";

function Header() {
  return <header>Header content</header>;
}

function MainLayout({ children }) {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
