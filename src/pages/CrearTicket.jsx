import { Button, Col, Row, Typography } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import React, { useContext, useState } from 'react'
import { useHideMenu } from '../hooks/useHideMenu';
import { SocketContext } from '../context/SocketContext';

export default function CrearTicket() {

    useHideMenu(true);

    const {socket} = useContext(SocketContext);

    const [ticket, setTicket] = useState(null)

    const { Title, Text } = Typography

    const newTicket = () => {
        socket.emit('solicitar-ticket',{},(ticket)=>{
            setTicket(ticket);
        })
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
            {
                ticket && (
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
                            {ticket.num}
                        </Text>
                    </Col>
                </Row>
                )
            }
        </>
    )
}
