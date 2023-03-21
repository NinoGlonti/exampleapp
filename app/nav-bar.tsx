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
    pathname === "/recruitement-pipeline" || pathname === "/import-candidate" ||"add-new-candidate"
      ? setShowNavigation(true)
      : setShowNavigation(false);
  }, [pathname]);

  return (
    <header className="navigation-header">
      <p className="logo-text"> Projects</p>{" "}
      {showNavigation &&  (
        <div className="navigation-links">
          <Link className="recruitement-link" href="/recruitement-pipeline">
            Recruitement Pipeline
          </Link>
          <Link className="import-link" href="/import-candidate">
            Import Candidates
          </Link>
          <span style={{ cursor: "pointer" }} onClick={() => signOut()}>
                {" "}
                Logout
              </span>


        </div>
      )}
    </header>
  );
};

export default NavBar;
