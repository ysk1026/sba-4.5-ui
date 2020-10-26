import React, {useState} from "react";
import axios from 'axios'
import { User } from '../../templates'
import { Link } from "react-router-dom";

const UserMenu = () => (
  <>
    <nav>
      <ol>
        <li>
          <Link to="/userregister">UserRegister</Link>
        </li>
        <li>
          <Link to="/userlogin">UserLogin</Link>
        </li>
        <li>
          <Link to="/userupdate">UserUpdate</Link>
        </li>
        <li>
          <Link to="/userremove">UserRemove</Link>
        </li>
        <li>
          <Link to="/userlist">User List</Link>
        </li>
      </ol>
    </nav>
  </>
);

export default UserMenu
