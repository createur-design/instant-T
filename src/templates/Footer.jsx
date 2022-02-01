import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import CollectionsIcon from "@mui/icons-material/Collections";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export const Footer = () => {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <HomeIcon />
            </Link>
          </li>
          <li>
            <Link to="/gallery">
              <CollectionsIcon />
            </Link>
          </li>
          <li>
            <Link to="/stats">
              <EmojiEventsIcon />
            </Link>
          </li>
          <li>
            <Link to="/profil">
              <PersonIcon />
            </Link>
          </li>
          <li>
            <Link to="/profil">
              <MoreHorizIcon />
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
