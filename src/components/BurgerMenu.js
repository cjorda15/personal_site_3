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
        <NavLink className="nav-link" activeClassName="selected" to={'/'}>
          home
        </NavLink>
        <NavLink className="nav-link" activeClassName="selected" to={'/about'}>
          about
        </NavLink>
        <NavLink
          className="nav-link"
          activeClassName="selected"
          to={'/projects'}
        >
          projects
        </NavLink>
        <NavLink className="nav-link" activeClassName="selected" to={'/resume'}>
          resume
        </NavLink>
        <NavLink
          className="nav-link"
          activeClassName="selected"
          to={'/contact'}
        >
          contact
        </NavLink>
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
