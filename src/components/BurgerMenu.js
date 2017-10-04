import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Scroll from 'react-scroll';

class BurgerMenu extends Component {
  constructor() {
    super();
    this.state = { open: false };
  }

  scrollAfterSearch(input) {
    setTimeout(() => {
      return Scroll.scroller.scrollTo(input, {
        duration: 1000,
        delay: 70,
        smooth: true
      });
    }, 100);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ open: !this.state.open });
  }

  showMenu() {
    return (
      <div className="navbar-menu">
        <div className="nav-links-wrapper">
          <NavLink
            className="nav-link"
            onClick={e => {
              this.handleClick(e);
            }}
            to={'/'}
          >
            home
          </NavLink>
          <NavLink
            className="nav-link"
            onClick={e => {
              this.handleClick(e);
            }}
            to={'#about-1-background '}
          >
            about
          </NavLink>
          <NavLink
            className="nav-link"
            onClick={e => {
              this.handleClick(e);
            }}
            to={'/projects'}
          >
            projects
          </NavLink>
          <NavLink
            className="nav-link"
            onClick={e => {
              this.handleClick(e);
            }}
            to={'/resume'}
          >
            resume
          </NavLink>
          <NavLink
            className="nav-link"
            onClick={e => {
              this.handleClick(e);
            }}
            to={'/contact'}
          >
            contact
          </NavLink>
        </div>
      </div>
    );
  }

  render() {
    return (
      <nav className="burger-menu-wrapper">
        <button
          onClick={e => {
            this.handleClick(e);
          }}
          className="c-hamburger c-hamburger--htx"
        >
          <span />
        </button>
        {this.state.open ? this.showMenu() : null}
      </nav>
    );
  }
}

export default BurgerMenu;
