"use client";

import React from "react";
import "../styles/globals.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import {useSession, signOut} from "next-auth/react";

const NavBar: React.FC = () => {
  const pathname = usePathname();
  const [showNavigation, setShowNavigation] = useState(false);
  const {data} = useSession();

  useEffect(() => {
    pathname === "/recruitement-pipeline" || pathname === "/import-candidate" || pathname === "/add-new-candidate"
      ? setShowNavigation(true)
      : setShowNavigation(false);
  }, [pathname]);

  return (
    <header className="navigation-header">
      <p className="logo-text"> Vala Challenge</p>{" "}
      {showNavigation ?  (
        <div className="navigation-links">
          <Link className="recruitement-link" href="/recruitement-pipeline">
            Recruitement Pipeline
          </Link>
          <span className="logout-btn" style={{ cursor: "pointer" }} onClick={() => signOut()}>
                {" "}
                Logout
              </span>
        </div>
      ): 
       <div className="navigation-links">
        <Link href={"/"} className="sign-up-nav">
          Sign In
        </Link>
      </div>
}
    </header>
  );
};

export default NavBar;
