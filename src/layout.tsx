import {CSSProperties} from 'react';
import {BookOutlined, CalculatorOutlined, UserOutlined, BarsOutlined} from '@ant-design/icons';
import {MenuProps} from 'antd';
import { Layout, Menu } from 'antd';
import {Link, Outlet} from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const menuItems: MenuProps['items'] = [
    {
        label: <Link to={'/'}>Главная</Link>,
        key: 'main',
        icon: <BarsOutlined/>
    },
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
        label: 'Методика',
        icon: <BookOutlined/>,
        key: 'method',
        children: [
            {
                label: <Link to={'/method-region'}>Для региона</Link>,
                key: 'method-region'
            },
            {
                label: <Link to={'/method-city'}>Для города</Link>,
                key: 'method-city'
            },
        ]
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
        flex: '1 0 0',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
    };

    const headerStyle: CSSProperties = {
        backgroundColor: 'white',
    };

    const contentStyle: CSSProperties = {
        margin: '24px 40px 0',
    }

    const footerStyle: CSSProperties = { textAlign: 'center',
        flex: '0 0 auto'
    };

    return (
        <Layout style={layoutStyle}>
            <Header style={headerStyle}>
                <Menu
                    theme="light"
                    mode="horizontal"
                    items={menuItems}
                />
            </Header>
            <Content style={contentStyle}>
                <Outlet/>
            </Content>
            <Footer style={footerStyle}/>
        </Layout>
    )
};