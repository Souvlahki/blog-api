import { Link } from "react-router-dom";

function DropdownMenu({ links }) {
  return (
    <ul className="dropdown-menu">
      {links.map((link) => {
        return (
          <li key={link}>
            <Link to={link.link}>{link.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default DropdownMenu;
