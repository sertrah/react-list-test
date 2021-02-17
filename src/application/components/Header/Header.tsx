import React, { FunctionComponent } from "react"; // importing FunctionComponent
import { useHistory, useLocation } from "react-router-dom";
import { Button } from "@react-md/button";

type HeaderProps = {
  menu: { title: string; path: string }[];
};

const Header: FunctionComponent<HeaderProps> = ({ menu }) => {
  const { pathname } = useLocation();
  const history = useHistory();

  return (
    <nav className="navbar">
      {menu.map(({ title, path }, i) => (
        <Button
          id={`text-button-${i}`}
          key={title}
          theme="primary"
          themeType={pathname === path ? "contained" : undefined}
          onClick={() => {
            history.push(path);
          }}
        >
          {title}
        </Button>
      ))}
    </nav>
  );
};

export default Header;
