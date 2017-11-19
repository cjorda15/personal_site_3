import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Scroll from 'react-scroll';
import $ from 'jquery';

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
    $('.c-hamburger').toggleClass('is-active');
  }

  showMenu() {
    return (
      <div className="navbar-menu">
        <div className="nav-links-wrapper">
          <a
            onClick={e => {
              this.handleClick(e);
            }}
            className="nav-link"
            to={'/'}
          >
            home
          </a>
          <NavLink
            onClick={e => {
              this.handleClick(e);
            }}
            className="nav-link"
            to={'#about-1-background '}
          >
            about
          </NavLink>
          <NavLink
            onClick={e => {
              this.handleClick(e);
            }}
            className="nav-link"
            to={'/projects'}
          >
            projects
          </NavLink>
          <NavLink
            onClick={e => {
              this.handleClick(e);
            }}
            className="nav-link"
            to={'/resume'}
          >
            resume
          </NavLink>
          <NavLink
            onClick={e => {
              this.handleClick(e);
            }}
            className="nav-link"
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
