import React from "react";
import { Outlet, Link } from "react-router-dom";
import Products from "./Products";
import Jewellary from "./Jewellary";
import Home from "./Home";
import { Input, Menu, Segment , Icon } from 'semantic-ui-react';

const Layout = () => {
  return (
    <>
      <nav>
        <div class="ui secondary menu">

          <a class="active item"><Link to="/Home">Home</Link></a>
          <a class="item" ><Link to="/Products">Men's Wear</Link></a>
          <a class="item"><Link to="/Jewellary">Jewellary</Link></a>
          <Menu.Menu position='right'>

            <Menu.Item>
              <Icon name='shopping cart' size='large' />
            </Menu.Item>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>


        </div>
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Products">Men's Wear</Link>
          </li>
          <li>
            <Link to="/Jewellary">Jewellary</Link>
          </li>
        </ul> */}
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
