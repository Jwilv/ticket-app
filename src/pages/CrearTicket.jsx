import { Button, Col, Row, Typography } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import React from 'react'
import { useHideMenu } from '../hooks/useHideMenu';

export default function CrearTicket() {

    useHideMenu(true);

    const { Title, Text } = Typography

    const newTicket = () => {
        console.log('Nuevo ticket');
    }

    return (
        <>
            <Row>
                <Col
                    span={14}
                    offset={6}
                    style={{ textAlign: 'center' }}
                >
                    <Title level={1}>precione el boton para crear un nuevo ticket</Title>
                    <Button
                        type='primary'
                        shape='round'
                        icon={<DownloadOutlined />}
                        size='large'
                        onClick={newTicket}
                    >
                        Nuevo ticket
                    </Button>
                </Col>
            </Row>
            <Row style={{ marginTop: 100 }}>
                <Col
                    span={14}
                    offset={6}
                    style={{ textAlign: 'center' }}
                >
                    <Title level={2} >
                        su numero:
                    </Title>
                    <br />
                    <Text type='success'
                    style={{fontSize:55}}
                    >
                        55
                    </Text>
                </Col>
            </Row>
        </>
    )
}
