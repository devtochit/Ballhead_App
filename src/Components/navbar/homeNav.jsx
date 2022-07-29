import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined, AudioOutlined, SearchOutlined, WifiOutlined } from '@ant-design/icons';

// import icon from '../images/cryptocurrency.png';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  const { Text } = Typography

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 500) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <nav>
      <ul className='nav-list'>
        <li>
          <MenuOutlined />
        </li>
        <Text level={1}>  crypto/List</Text>



        <li><WifiOutlined /></li>
        <li>
          <AudioOutlined />
        </li>
        <li> <SearchOutlined /></li>
      </ul>
    </nav>
  );
};

export default Navbar;
