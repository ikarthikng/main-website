import React, { useState } from "react"
import type { NextPage } from "next"
import Head from "next/head"
import { Typography, Box, IconButton, Grid, Chip } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import MuiDrawer from "@mui/material/Drawer"
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar"
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles"
import Toolbar from "@mui/material/Toolbar"
import List from "@mui/material/List"
import CssBaseline from "@mui/material/CssBaseline"
import Divider from "@mui/material/Divider"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import WorkHistoryRoundedIcon from "@mui/icons-material/WorkHistoryRounded"
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded"
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded"
import InterestsRoundedIcon from "@mui/icons-material/InterestsRounded"
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded"
import { ListItemComponent } from "../components/ListItemComponent"
import { ExperienceComponent } from "../components/ExperienceComponent"
import { EducationComponent } from "../components/EducationComponent"

const drawerWidth = 240

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: "hidden"
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
})

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}))

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}))

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme)
  })
}))

const Home: NextPage = () => {
  const theme = useTheme()
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Head>
        <title>Karthik - Full Stack Developer</title>
        <meta name="description" content="Karthik - Full Stack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" })
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Karthik Gangadharaiah
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <ListItemComponent componentText="Experience" IconComponent={WorkHistoryRoundedIcon} sidebarOpen={open} />
            <ListItemComponent componentText="Education" IconComponent={SchoolRoundedIcon} sidebarOpen={open} />
            <ListItemComponent componentText="Skills" IconComponent={PsychologyRoundedIcon} sidebarOpen={open} />
            <ListItemComponent componentText="Interests" IconComponent={InterestsRoundedIcon} sidebarOpen={open} />
            <ListItemComponent componentText="Awards" IconComponent={EmojiEventsRoundedIcon} sidebarOpen={open} />
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Typography variant="body1" display="block" gutterBottom>
            Meticulous, hardworking software professional with 7+ years of experience and proven knowledge of software
            development, programming, design, testing, and troubleshooting systems in healthcare, retail, insurance and
            finance. Ardent about problem-solving with a master's degree in Computer Science from The University of
            Texas at Arlington.
          </Typography>
          <Divider>
            <Chip
              sx={{ fontSize: "1.2rem", padding: "0.5em", margin: "0.5em" }}
              color="info"
              icon={<WorkHistoryRoundedIcon />}
              label="Experience"
            />
          </Divider>
          <Grid mt={1} container spacing={2}>
            <ExperienceComponent />
          </Grid>
          <Divider>
            <Chip
              sx={{ fontSize: "1.2rem", padding: "0.5em", margin: "0.75em" }}
              color="info"
              icon={<SchoolRoundedIcon />}
              label="Education"
            />
          </Divider>
          <EducationComponent />
        </Box>
      </Box>
    </>
  )
}

export default Home
