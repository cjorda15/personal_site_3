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
    // e.preventDefault();
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
              this.jump(e);
            }}
            className="nav-link"
            href="#home"
          >
            home
          </a>
          <a
            onClick={e => {
              this.handleClick(e);
            }}
            className="nav-link"
            to="#skills"
          >
            skills
          </a>
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

  jump(e) {
    console.log($(this));
    if (e) {
      var target = $(this)
        .parents('.side-nav-link')
        .prevObject[0].getAttribute('href');
    } else {
      var target = location.hash;
    }
    if (target.indexOf('http') == 0) return;
    //  e.preventDefault();
    $('html,body').animate(
      {
        scrollTop: $(target).offset().top
      },
      1500,
      function() {}
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
