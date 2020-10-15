import React from "react";
import { Link } from "react-router-dom";

const ItemMenu = () => (
  <>
    <nav>
      <ol>
        <li>
          <Link to="itemregister">ItemRegister</Link>
        </li>
        <li>
          <Link to="itemread">ItemRead</Link>
        </li>
        <li>
          <Link to="itemupdate">ItemUpdate</Link>
        </li>
        <li>
          <Link to="itemremove">ItemRemove</Link>
        </li>
      </ol>
    </nav>
  </>
);

export default ItemMenu
