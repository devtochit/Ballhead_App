import React, { useEffect, useState } from 'react'
import millify from 'millify';
// import { Grid } from 'antd-mobile'

import { Card, Row, Col, Input } from 'antd';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import { useGetCryptosQuery } from '../services/api.service';







function Cryptocurrency(simplified) {
    const count = simplified ? 10 : 100;
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count)
    const [cryptos, setCryptos] = useState()
    const [searchTerm, setSearchTeam] = useState('')

    useEffect(() => {
        setCryptos(cryptosList?.data?.coins)

        const filteredCoin = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm))

        setCryptos(filteredCoin)

    }, [cryptosList, searchTerm])

    if (isFetching) return <Loader />

    return (

        <>

            {!simplified && (
                <div className='search-crypto'>
                    <Input
                        placeholder='Search Crypto'
                        onChange={(e) => setSearchTeam(e.target.value.toLowerCase())}
                    />
                </div>
            )}

            <Row gutter={[32, 32]} className='cryto-card-container'>
                {cryptos?.map((currency) => (
                    <Col
                        xs={24}
                        sm={1}
                        lg={6}
                        className='crypto-card'
                        key={currency.uuid}
                    >
                        <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
                            <Card
                                title={`${currency.rank}.${currency.name}`}
                                extra={<img src={currency.iconUrl} className="crypto-image" />}
                                hoverable
                            >
                                <p> Price:{millify(currency.price)}</p>
                                <p> Market Cap:{millify(currency.marketCap)}</p>
                                <p>Daily Change:{currency.Change}</p>
                            </Card>
                        </Link>
                    </Col>


                ))}
            </Row>


        </>
    )
}

export default Cryptocurrency