import React from 'react'
import { LeftOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom'


function DetailsNav({ onlick }) {
    const navigate = useNavigate();


    return (
        <div>
            <Row gutter={[40, 20]}>
                <Col span={32}>
                    <button onClick={() => navigate(-1)}> <LeftOutlined /></button>

                </Col>
                <Col span={50}>
                    <button onClick={() => navigate(-1)}> <LeftOutlined /></button>

                </Col>
            </Row>






        </div>
    )
}

export default DetailsNav