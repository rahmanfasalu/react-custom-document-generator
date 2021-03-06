import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import styled from "styled-components";
const Navigation = styled.header`
  width: 100%;
  border-bottom: 10px solid #222;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 35px;
  margin-bottom: 2px;
  background: #f8f8f8;

  .logo a {
    display: flex;
    flex-direction: column;
    clear: both;
    text-decoration: none;
    p {
      display: block;
      font-size: 1.5em;
      margin: 0;
    }
  }
  .gray {
    color: #ccc;
  }
  a {
    color: #222;
    opacity: 0.55;
    transition: all 0.6s;
    color: #222;
    font-size: 1em;
    width: 100%;
  }
  a:hover {
    opacity: 1;
  }
  .fa-bars {
    display: none;
    color: #222;
    font-size: 2rem;
  }
  nav {
    padding: 0;
    ul {
      display: flex;
      justify-content: space-between;
      margin: 0;
    }
    li {
      list-style-type: none;
      margin: 0 15px;
      justify-content: space-between;
      font-size: 1em;
    }
    a {
      font-size: 1em;
      text-decoration: none;
      .active {
        color: tomato;
      }
    }
    a.active {
      color: #222;
    }
  }

  @media only screen and (max-width: 800px) {
    padding: 15px 0;
    .logo {
      padding-left: 15px;
      padding-top: 0px !important;
    }
  }
  @media only screen and (max-width: 600px) {
    height: auto;
    min-height: 50px;
    display: block;
    position: relative;
    .logo {
      width: 100%;
      display: block;
      padding-top: 20px;
      margin: 0px;
      margin-left: -5px;
    }
    .fa-bars {
      display: block;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
    ul.collapsed {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;
      overflow: hidden;
      max-height: 0;
      -moz-transition-duration: 0.4s;
      -webkit-transition-duration: 0.4s;
      -o-transition-duration: 0.4s;
      transition-duration: 0.4s;
      -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

      &.is-expanded {
        overflow: hidden;
        max-height: 500px; /* approximate max height */
        -moz-transition-duration: 0.4s;
        -webkit-transition-duration: 0.4s;
        -o-transition-duration: 0.4s;
        transition-duration: 0.4s;
        -moz-transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        -o-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
      }
      li {
        padding: 15px 10px;
        margin: 0px 0px;
        width: 100%;
      }
    }
  }
`;
const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  return (
    <Navigation>
      <div className="logo">
        <Link to="/">
          <p>React demo app</p>
        </Link>
      </div>

      <nav className="nav">
        <i
          className="fa fa-bars"
          aria-hidden="true"
          onClick={(e) => handleToggle(e)}
        />
        <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
          <NavLink to="/" activeClassName="active" exact>
            <li>Home </li>
          </NavLink>
          <NavLink activeClassName="active" to="/data">
            <li>Data </li>
          </NavLink>

          <NavLink activeClassName="active" to="/about">
            <li>About</li>
          </NavLink>
        </ul>
      </nav>
    </Navigation>
  );
};

export default Header;
