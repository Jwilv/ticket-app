import React, { useContext, useEffect, useState } from 'react'
import { Card, Col, Divider, List, Row, Tag, Typography } from 'antd'
import Item from 'antd/es/list/Item';
import { useHideMenu } from '../hooks/useHideMenu';
import { SocketContext } from '../context/SocketContext';

export const Turnos = () => {

    useHideMenu(true);

    const { Title, Text } = Typography

    useHideMenu(true);

    const { socket } = useContext(SocketContext);

    const [tickets, setTickets] = useState([])

    useEffect(() => {
        socket.on('ticket-asignado', (asignados) => {
            setTickets(asignados)
        })
    }, [socket])

    return (
        <>
            <Title level={1}>Atendiendo al cliente</Title>
            <Row>
                <Col span={12}>
                    <List
                        dataSource={tickets.slice(0, 3)}
                        renderItem={(item) => (
                            <List key={item.agente}>
                                <Item style={{ fontSize: 23 }}>
                                    <Card
                                        style={{ width: 300, marginTop: 16 }}
                                        actions={[
                                            <Tag color={'volcano'}>{item.agente}</Tag>,
                                            <Tag color={'magenta'}>Escritorio: {item.escritorio}</Tag>,
                                        ]}
                                    >
                                        <Title>Numero: {item.num}</Title>
                                    </Card>
                                </Item>

                            </List>
                        )}
                    />
                </Col>
                <Col span={12}>
                    <Divider>Historial</Divider>
                    <List
                        dataSource={tickets.slice(3)}
                        renderItem={item => (
                            <Item>
                                <Card
                                    title={`Numero de ticket: ${item.num}`}
                                >
                                    <Text type='secondary'>En el escritorio: </Text>
                                    <Tag color={'magenta'}> {item.num}</Tag>
                                    <Text type='secondary'>Agente: </Text>
                                    <Tag color={'volcano'}> {item.agente}</Tag>
                                </Card>
                            </Item>
                        )}
                    >

                    </List>
                </Col>
            </Row>
        </>
    )
}
