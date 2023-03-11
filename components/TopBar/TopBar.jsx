import React, { useState } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Image from "next/image";

const navigationLinks = [
  { name: "HEALTH", href: "/tech-news" },
  { name: "HYGIENE", href: "/events" },
  { name: "FOODS & DRINKS", href: "/startups" },
  { name: "HOW TO's", href: "/how-to" },
  { name: "WORKOUTS", href: "/gadgets-appliances" },
  { name: "NEWS", href: "/learn" },
  { name: "BLOGS", href: "/shop" },
];

const useStyles = makeStyles((theme) => ({
  link: {
    marginRight: 20,
    color:"white",
    '&:hover': {
      color:"#ef5450",
      textDecoration:"underline",
    }
  },
  avatar: {
    marginRight: "auto",
    color: "white",
    backgroundColor: "black",
    borderRadius: 0,
    height: 30,
    border: "2px solid gray",
    borderLeft: "12px solid transparent",
    borderRight: "12px solid transparent",
  },
}));

export default function TopBar() {
  const styles = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="" color="default" style={{ position: "fixed", top: 0, backgroundColor:"#65BFA1" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Hidden xsDown>
          <Link href="/">
            <Image
              src="/assets/healthmatta_logo.png"
              height="40"
              width="280"
              style={{ paddingRight: "3em" }}
              className="cybermatta-logo-image"
            />
            </Link>
            {navigationLinks.map((item) => (
              <Link
                className={styles.link}
                color="textPrimary"
                variant="button"
                underline="none"
                href={item.href}
                key={item.name}
              >
                {item.name}
              </Link>
            ))}
          </Hidden>
          <Hidden smUp>
            <Link href="/">
          <Image
              src="/assets/cybermatta-logo.png"
              height="30"
              width="200"
              style={{ marginRight: "3em" }}
              className="cybermatta-logo-image"
            /></Link>
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </Container>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <div
          onClick={() => setOpen(false)}
          onKeyPress={() => setOpen(false)}
          role="button"
          tabIndex={0}
        >
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {navigationLinks.map((item) => (
            <ListItem key={item.name}>
              <Link
                className={styles.link}
                color="textPrimary"
                variant="button"
                underline="none"
                href={item.href}
              >
                {item.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
}
