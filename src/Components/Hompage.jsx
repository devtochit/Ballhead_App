import React from 'react';
import { Link } from 'react-router-dom';
import millify from 'millify';

import { Typography, Row, Col, Statistic } from 'antd';
import { useGetCryptosQuery } from '../services/api.service.js';
import Loader from './Loader';
import Cryptocurrency from './cryptocurrency.jsx';
import Homepage from './navbar/homeNav'


const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(20);
  const globalStats = data?.data?.stats
  console.log(globalStats)

  if (isFetching) return <Loader />
  const { Title } = Typography


  return (
    <>
      <Row gutter={[32, 32]} className='blue'>
        <Col>   <Homepage /></Col>
        <Col> <Title level={2} className='heading'>   Global Crypto Stats    </Title></Col>
        <Col span={12}> <Statistic title=' Total CryptoCurrencies' value={globalStats.total}> </Statistic> </Col>
        <Col span={12}> <Statistic title=' Total Exchange' value={millify(globalStats.totalExchanges)}> </Statistic> </Col>
        <Col span={12}> <Statistic title=' Total MarketCap' value={` $${millify(globalStats.totalMarketCap)}`}> </Statistic> </Col>
        <Col span={12}> <Statistic title=' Total 24h Volume ' value={` $${millify(globalStats.total24hVolume)}`}> </Statistic> </Col>
        <Col span={12}> <Statistic title=' Total CryptoCurrencies' value={globalStats.total}> </Statistic> </Col>
        <Col span={12}> <Statistic title=' Total Markets' value={globalStats.totalMarkets}> </Statistic> </Col>
      </Row>

      <Row className='home-heading-container'>
        <Col>
          <Title level={2} className='home-title'>
            Top Cryptos in the world
          </Title>
        </Col>
      </Row>

      <Row>
        <Col>
          <Title level={3} className='show-more'>
            <Link to='/crytocurrencies' className='icon-btn'> Show more click here </Link>
          </Title>
        </Col>
      </Row>

      <Row gutter={[32, 32]}>
        <Col sm={24} >
          <Cryptocurrency simplified />
        </Col>
      </Row>





    </>
  );

};

export default HomePage;
