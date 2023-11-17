import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      to: "/home", // Specify the route path
    },
    {
      text: "About",
      icon: <InfoIcon />,
      to: "/about", // Specify the route path
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
      to: "/testimonials", // Specify the route path
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      to: "/contact", // Specify the route path
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
      to: "/cart", // Specify the route path
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <Link to="/">Home</Link> {/* Use Link for routing */}
        <Link to="/work">Work</Link> {/* Use Link for routing */}

        <Link to="/testimonials">Testimonials</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">
          <ShoppingCartRoundedIcon className="navbar-cart-icon" />
        </Link>

        <button className="primary-button">Book Now</button>
      </div>
      <div className="navbar-menu-container">
        <MenuIcon onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <Link to={item.to}> {/* Use Link for routing */}
                    <ListItemText primary={item.text} />
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
