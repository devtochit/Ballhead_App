import React, { useEffect, useState } from 'react'
import millify from 'millify';
import { Card, Row, Col, Input, Typography, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import { useGetCryptosQuery } from '../services/api.service';
import DetailsNav from './navbar/detailsNav'





const { Text } = Typography


function Cryptocurrency(simplified) {
    const count = simplified ? 20 : 100;
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count)
    const [cryptos, setCryptos] = useState()
    const [searchTerm, setSearchTeam] = useState('')

    useEffect(() => {
        setCryptos(cryptosList?.data?.coins)

        const filteredCoin = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm))

        setCryptos(filteredCoin)

    }, [cryptosList, searchTerm])

    if (isFetching) return <Loader />
    const gridStyle = {
        background: '#1B262C',
        color: ' #fff ',
        borderRadius: '5px',
        marginTop: '10px'
    }

    return (

        <>
          <div className=' crytocurrency-dev'>
          {simplified && (
                <div className='search-crypto'>
                    <Input
                        placeholder='Search Crypto'
                        onChange={(e) => setSearchTeam(e.target.value.toLowerCase())}
                    />
                </div>
            )}

            <Row gutter={[32, 32]} className='cryto-card-container black '>
                {cryptos?.map((currency) => (
                    <Col
                        xs={24}
                        sm={32}
                        lg={6}
                        className='crypto-card'
                        key={currency.uuid}
                    >
                        <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
                            <Card
                                title={`${currency.rank}.${currency.name}`}
                                extra={<img src={currency.iconUrl} className="crypto-image" />}
                                hoverable
                                style={gridStyle}
                            >
                                <p> Price:{millify(currency.price)}</p>
                                <p> Market Cap:{millify(currency.marketCap)}</p>
                                <p>Daily Change:{currency.Change}</p>
                            </Card>
                        </Link>
                    </Col>


                ))}
            </Row>
          </div>


        </>
    )
}

export default Cryptocurrency