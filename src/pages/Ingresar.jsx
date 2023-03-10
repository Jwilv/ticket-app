import React, { useEffect, useState } from 'react';
import { Button, Divider, Form, Input, InputNumber, Typography } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import { useHideMenu } from '../hooks/useHideMenu';
import { getUserStorage } from '../helpers/getUserStorage';

export default function Ingresar() {

    useHideMenu(false);

    const [user] = useState(getUserStorage())


    const { Title, Text } = Typography

    const navigate = useNavigate()

    useEffect(() => {
        if (user.agente && user.escritorio) {
            navigate('/escritorio')
        }
    }, [])

    const onFinish = ({ escritorio, agente }) => {
        localStorage.setItem('escritorio', escritorio);
        localStorage.setItem('agente', agente);
        navigate('/escritorio')
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Title level={2}>Ingresar</Title>
            <Text>Ingrese su nombre y su escritoriio</Text>
            <Divider />
            <Form
                name="basic"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 20 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete={'off'}
            >
                <Form.Item
                    label="Agente"
                    name="agente"
                    rules={[{ required: true, message: 'por favor ingrese su nombre' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Escritorio"
                    name="escritorio"
                    rules={[{ required: true, message: 'ingrese su escritorio' }]}
                >
                    <InputNumber max={99} min={1} />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                    <Button type="primary" htmlType="submit" shape='round'>
                        <SaveOutlined />
                        Ingresar
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}
