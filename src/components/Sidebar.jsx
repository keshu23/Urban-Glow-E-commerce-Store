import React from "react";
import { items } from "../data/Dataitems";
import { Subsidebar } from "./Subsidebar";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        {items.map((val, i) => {
          return (
            <>
              <div className="sidebar-items">
                <li>{val.icon} </li>
              </div>

              <Subsidebar />
            </>
          );
        })}
      </ul>
    </div>
  );
}
