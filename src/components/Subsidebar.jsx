import React from "react";
import { MdAlternateEmail } from "react-icons/md";
import { SiFormspree } from "react-icons/si";
import { IoChatboxSharp } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const Subsidebar = (subsection) => {
  <div className="subsidebar">
    <h2>Configuration</h2>
    <input type="text" placeholder="Search..." />

    <ul className="subsidebar-list">
      <div className="subsidebar-items">
        <span>
          <li>
            <MdAlternateEmail />
          </li>
        </span>

        <span>
          <li>
            <SiFormspree />
          </li>
        </span>

        <span>
          <li>
            <IoChatboxSharp />
          </li>
        </span>

        <span>
          <li>
            <FaVideo />
          </li>
        </span>

        <span>
          <li>
            <IoCall />
          </li>
        </span>
      </div>
    </ul>
  </div>;
};

export { Subsidebar };
