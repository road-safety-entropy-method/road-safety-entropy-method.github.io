import React, {CSSProperties} from 'react';
import {BookOutlined, CalculatorOutlined, UserOutlined} from '@ant-design/icons';
import {MenuProps, Typography} from 'antd';
import { Layout, Menu } from 'antd';
import {Link, Outlet} from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const menuItems: MenuProps['items'] = [
    {
        label: 'Калькулятор',
        icon: <CalculatorOutlined/>,
        key: 'calculator',
        children: [
            {
                label: <Link to={'/calculator-region'}>Для региона</Link>,
                key: 'calculator-region'
            },
            {
                label: <Link to={'/calculator-city'}>Для города</Link>,
                key: 'calculator-city'
            },
        ]
    },
    {
        label: (
            <Link to={'/method'}>Методика</Link>
        ),
        icon: <BookOutlined/>,
        key: 'method'
    },
    {
        label:(
            <Link to={'/about-author'}>Об авторе</Link>
        ),
        icon: <UserOutlined/>,
        key: 'about-author'
    },
]

export const MainLayout: React.FC = () => {
    const layoutStyle: CSSProperties = {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    };

    const wrapperStyle: CSSProperties = {
        flex: '1 0 auto'
    }

    const headerStyle: CSSProperties = {
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    };

    const contentStyle: CSSProperties = {
        margin: '24px 16px 0',
    }

    const footerStyle: CSSProperties = { textAlign: 'center',
        flex: '0 0 auto'
    };

    return (
        <Layout style={layoutStyle}>
            <div style={wrapperStyle}>
            <Header style={headerStyle}>
                <Link to={'/'}>
                    <Typography.Title level={5} style={{marginBottom: 0}}>Методика оценки степени организованности систем обеспечения БДД</Typography.Title>
                </Link>
                <Menu
                    theme="light"
                    mode="horizontal"
                    items={menuItems}
                    onClick={(data) => {
                        console.log(data)
                    }}
                />
            </Header>
            <Content style={contentStyle}>
                <Outlet/>
            </Content>
            </div>
            <Footer style={footerStyle}>
                тут будет какой-нибудь прикольный футер с ссылкой на гитхаб например
            </Footer>
        </Layout>
    )
};