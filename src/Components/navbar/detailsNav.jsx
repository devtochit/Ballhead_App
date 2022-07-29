import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link, useNavigate  } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, LeftOutlined, BulbOutlined, FundOutlined, MenuOutlined, AudioOutlined, SearchOutlined, WifiOutlined } from '@ant-design/icons';

// import icon from '../images/cryptocurrency.png';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  const navigate = useNavigate();

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
    <div className="nav-container">
      <nav nav-navbar>

        <li>
          <button onClick={()=>navigate(-1)} className='nav-button'> <LeftOutlined /></button>

        </li>
        <Text level={1}>  crypto/details</Text>



        <ul className='nav-list2'>
          <li>
            <AudioOutlined />
          </li>
          <li> <SearchOutlined /></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
