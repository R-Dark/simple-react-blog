import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <NavLink className="navLink" exact to="/">
              PollyBlog
            </NavLink>
            <NavLink className="navLink" to="/createpost">
              Create a New Post
            </NavLink>
            <NavLink className="navLink" to="/postlist">
              Show all Posts
            </NavLink>
          </nav>
        </header>

        {this.props.children}
      </div>
    );
  }
}

export default BaseLayout;
