import React from 'react'

import {
    UserAddOutlined,
    UserOutlined,
    ReconciliationOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link, Route, Routes } from 'react-router-dom';
import CrearTicket from './CrearTicket';
import { Turnos } from './Turnos';
import Ingresar from './Ingresar';
import Escritorio from './Escritorio';

const { Header, Sider, Content } = Layout;

export const RouterPage = () => {
    return (
        <Layout style={{
            height: '100vh',
            width: '100vw',
            margin: '-8px'
        }}>
            <Sider >
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                >
                    <Menu.Item key={'1'} icon={<UserOutlined />}>
                        <Link to={'/ingresar'}>Ingrese</Link>
                    </Menu.Item>
                    <Menu.Item key={'2'} icon={<ReconciliationOutlined />}>
                        <Link to={'/turnos'}>Turnos</Link>
                    </Menu.Item>
                    <Menu.Item key={'3'} icon={<UserAddOutlined />}>
                        <Link to={'/crear'}>Crear ticket</Link>
                    </Menu.Item>
                </Menu>

            </Sider>
            <Layout className="site-layout">
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <Routes>
                        <Route path='/ingresar' element={<Ingresar />} />
                        <Route path='/turnos' element={<Turnos />} />
                        <Route path='/crear' element={<CrearTicket />} />
                        <Route path='/escritorio' element={<Escritorio />} />
                        <Route path='*' element={<Ingresar />} />
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    )
}
