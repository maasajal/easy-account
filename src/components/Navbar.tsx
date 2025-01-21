"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Menu,
  Toolbar,
  Box,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
// MUI Icons
import MenuIcon from "@mui/icons-material/Menu";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Image from "next/image";

const navLinks = [
  { navName: "Home", path: "/" },
  { navName: "About", path: "/about" },
  { navName: "Services", path: "/services" },
  { navName: "Pricing", path: "/pricing" },
  { navName: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-[#000000A6] text-white">
      <motion.div
        className="container mx-auto px-4 py-1"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Image
              src="/BElogo.png"
              alt="company logo"
              width={60}
              height={40}
            />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {navLinks.map((page) => (
                <Button
                  key={page.path}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: "block" }}
                >
                  <Link href={page.path}>{page.navName}</Link>
                </Button>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Image
              src="/BElogo.png"
              alt="company logo"
              width={60}
              height={40}
            />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {navLinks.map((page) => (
              <Button
                key={page.path}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link href={page.path}>{page.navName}</Link>
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Button
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              <Link
                href="https://forms.gle/GQNXRbnYkrf1oiQt6"
                target="_blank"
                className="bg-blue-600 hover:bg-red-800 text-white py-2 font-bold rounded-full transition ml-5 w-32 justify-center"
              >
                Join Now
              </Link>
            </Button>
            <Button
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              <Link
                href="https://forms.gle/GQNXRbnYkrf1oiQt6"
                target="_blank"
                className="bg-blue-600 hover:bg-red-800 text-white text-lg px-5 py-2 rounded-full transition"
              >
                <WhatsAppIcon />
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </motion.div>
    </header>
  );
};

export default Navbar;
