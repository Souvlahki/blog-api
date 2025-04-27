import { useAuth } from "../contexts/AuthProvider";
import { Link } from "react-router-dom";
import { SquarePen, AlignJustify } from "lucide-react";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import "../styles/Header.css";

function Header() {
  const [isShown, SetIsShown] = useState(false);
  const { user } = useAuth();
  const links = [
    {
      link: "/test",
      name: "test",
    },
  ];

  return (
    <nav className="header ">
      <h1 className="title">Elven</h1>
      {user ? (
        <ul className="header-ul">
          <li className="header-li">
            <Link to="/post">
              <SquarePen />
            </Link>
          </li>
          <li className="header-li">
            <button
              onClick={() => {
                isShown ? SetIsShown(false) : SetIsShown(true);
              }}
            >
              <AlignJustify></AlignJustify>
              {isShown && <DropdownMenu links={links}></DropdownMenu>}
            </button>
          </li>
        </ul>
      ) : (
        <ul className="header-ul">
          <li className="header-li">
            <Link to="/login">Login</Link>
          </li>
          <li className="header-li get-started">
            <Link to="/sign-up">Get started</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Header;
