import React from 'react';
import {Menu} from 'antd';
import Avatar from 'antd/es/avatar/avatar';
import logo from './logo.svg';
import Typography from 'antd/es/typography/Typography';
import { Link } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';

const Navbar = () => {
  return (
    <div className="nav-container">
        <div className="logo-container">
            <Avatar src={logo} size="logo" className="App-logo" alt="logo" />
            <Typography.Title level={2} className="logo">
                <Link to="/">CryptoVerse</Link>
            </Typography.Title>

        
        </div>
        <div className="">
            <Menu theme="dark">
                <Menu.Item icon={<HomeOutlined/>}>

                </Menu.Item>
            </Menu>

        </div>
        Navbar

    </div>
  )
}

export default Navbar