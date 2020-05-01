import React, {Component} from 'react';

import {Link} from "react-router-dom";

// Font Awesome Imports
import {library} from "@fortawesome/fontawesome-svg-core";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// Library Creation
library.add(fas, fab);

class Contact extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src = "./qform24.js";
    document.head.appendChild(script);
  }
  render() {
    return (<div id="main">

      <article id="contact">
        <h2 class="major">Contact</h2>

        <div id="z3ftE68k" data-formid="G215676774507fb" class="_Forms_generate"></div>

        <ul class="icons">
          <li>
            <a href="https://t.me/the_md" class="icon">
              <FontAwesomeIcon icon={["fab", "telegram"]}/>
            </a>
          </li>
          <li>
            <a href="mailto:themd@mail.ru" class="icon">
              <FontAwesomeIcon icon={["fas", "envelope"]}/>
            </a>
          </li>
          </li>
          <li>
            <a href="https://github.com/the-md/" class="icon">
              <FontAwesomeIcon icon={["fab", "github"]}/>
            </a>
          </li>
        </ul>
        <Link to="/" className="close">Close</Link>
      </article>

    </div>)
  }
}

export default Contact;
