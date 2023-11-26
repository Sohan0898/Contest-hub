import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../../../public/fabicon.png";
import Logo from "../Logo/Logo";
import { Link, NavLink, useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";

function Navber() {
  const { user, logOut } = useAuth();
  const navigate = useNavigate(); 


  const handleLogOut = () => {
    logOut()
    toast.success(`${user?.displayName.split(/\s+/)
    .slice(0, 1)
    .join(" ")} has successfully sign-out`)
      .then(() => console.log("Sign-out successful"))
      .catch((error) => console.log(error));
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDashboard = ()=> {
 navigate("dashboard")
  }


  //scrollToShadow

  const [hasShadow, setHasShadow] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50;
      const shouldHaveShadow = window.scrollY > scrollThreshold;

      if (shouldHaveShadow !== hasShadow) {
        setHasShadow(shouldHaveShadow);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasShadow]);


  const navMenu = (
    <>
      {user && (
        <>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "font-semibold"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/allFood"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "font-semibold"
                  : ""
              }
            >
              Our Contest
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "font-semibold"
                  : ""
              }
            >
              Blog
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <AppBar sx={{ background: "#0d1a33", py: 1 , boxShadow: hasShadow ? '0px 4px 10px rgba(0, 0, 0, 0.1)' : 'none', zIndex: 10,}} position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo></Logo>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "montserrat",
              fontWeight: 700,

              color: "inherit",
              textDecoration: "none",
            }}
          >
            CONTEST<span className="text-primary font-normal">HUB</span>
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
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <div className="list-none px-4 space-y-3 justify-center items-center gap-5 font-montserrat">
                {navMenu}
              </div>
            </Menu>
          </Box>

          <img className="h-8 flex lg:hidden mr-1" src={logo} alt="" />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "montserrat",
              fontWeight: 700,

              color: "inherit",
              textDecoration: "none",
            }}
          >
            CONTEST<span className="text-primary font-normal">Hub</span>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <div className="list-none ml-10 flex justify-center items-center gap-5 font-montserrat">
              {navMenu}
            </div>
          </Box>

          {user ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    className="outline outline-2 outline-primary"
                    alt={user?.displayName}
                    src={user?.photoURL}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem>
                  <Typography
                    fontWeight={700}
                    fontFamily="montserrat"
                    textAlign="center"
                    
                  >
                    {user.displayName}
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Button
                  onClick={handleDashboard}
                    variant="contained"
                    fullWidth
                    sx={{ background: "#0d1a33", fontWeight: 600 }}
                    endIcon={<DashboardIcon />}
                  >
                    Dashboard
                  </Button>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Button
                    onClick={handleLogOut}
                    variant="contained"
                    fullWidth
                    sx={{ background: "#0d1a33", fontWeight: 600 }}
                    endIcon={<LogoutIcon />}
                  >
                    Sign Out
                  </Button>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Link to={"/login"}>
              <Button
                variant="contained"
                sx={{ background: "#1786F9", fontWeight: 600 }}
                endIcon={<LoginIcon />}
              >
                Sign In
              </Button>
            </Link>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navber;
