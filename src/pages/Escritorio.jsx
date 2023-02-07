import { Button, Col, Divider, Row, Typography } from 'antd'
import { CloseCircleOutlined, CaretRightOutlined } from '@ant-design/icons';
import React, { useContext, useEffect, useState } from 'react'
import { useHideMenu } from '../hooks/useHideMenu';
import { getUserStorage } from '../../helpers/getUserStorage';
import { useNavigate } from 'react-router';
import { SocketContext } from '../context/SocketContext';

export default function Escritorio() {
    const { Title, Text } = Typography

    useHideMenu(false);

    const { socket } = useContext(SocketContext)

    const [user] = useState(getUserStorage())

    const [ticket, setTicket] = useState(null);

    const navigate = useNavigate()

    useEffect(() => {
        if (!user.agente || !user.escritorio) {
            navigate('/ingresar')
        }
    }, [])

    const exit = () => {
        localStorage.clear('agente');
        localStorage.clear('escritotio')
        navigate('/ingresar')
    }

    const siguienteTicket = () => {
        socket.emit('siguiente-ticket', user, (ticket) => {
            setTicket(ticket);
        })
    }

    return (
        <>
            <Row>
                <Col span={20}>
                    <Title level={2}>{user.agente}</Title>
                    <Text>usted esta trabajando en el escritorio: </Text>
                    <Text type='success'>{user.escritorio}</Text>
                </Col>
                <Col span={4} aling='right'>
                    <Button
                        shape='round'
                        type="primary"
                        danger
                        onClick={exit}>
                        <CloseCircleOutlined />
                        Salir
                    </Button>
                </Col>
            </Row>
            <Divider />
            {
                (ticket) && (
                    <Row>
                        <Col>
                            <Text>Esta atendiendo el ticket numero: </Text>
                            <Text
                                style={{ fontSize: 30 }}
                                type='danger'
                            > {ticket.num} </Text>
                        </Col>
                    </Row>
                )
            }
            <Row>
                <Col
                    offset={18}
                    span={6}
                    aling='right'
                >
                    <Button
                        onClick={siguienteTicket}
                        shape='raund'
                        type='primary'
                    >
                        <CaretRightOutlined />
                        Siguiente
                    </Button>

                </Col>
            </Row>
        </>
    )
}
