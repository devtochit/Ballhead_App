import React from 'react';
import { Link } from 'react-router-dom';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { useGetCryptosQuery } from '../services/api.service.js';
import Loader from './Loader';
 


const HomePage= () => {
  const { data, isFetching }= useGetCryptosQuery (10);
   const globalStats = data?.data?.stats
   console.log( globalStats)

if (isFetching) return <Loader/>
 const { Title} = Typography

  
    return (
      <>
      <Title level={2} className='heading'>   Global Crypto Stats    </Title>
       <Row gutter={[32,32]}>
        <Col span={12}> <Statistic title=' Total CryptoCurrencies' value={globalStats.total}> </Statistic> </Col>
        <Col span={12}> <Statistic title=' Total Exchange' value={ millify(globalStats.totalExchanges) }> </Statistic> </Col>
        <Col span={12}> <Statistic title=' Total MarketCap' value={ ` $${millify(globalStats.totalMarketCap)}` }> </Statistic> </Col>
        <Col span={12}> <Statistic title=' Total 24h Volume ' value={ ` $${millify(globalStats.total24hVolume)}` }> </Statistic> </Col>
        <Col span={12}> <Statistic title=' Total CryptoCurrencies' value={globalStats.total}> </Statistic> </Col>
        <Col span={12}> <Statistic title=' Total Markets' value={globalStats.totalMarkets}> </Statistic> </Col>




        
        
        </Row>







      </>
    );

};

export default HomePage;
