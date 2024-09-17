import {Card, Col, Flex, Row, Statistic, theme, Typography} from "antd";
import {CSSProperties} from "react";
import {MailOutlined, BookOutlined, DatabaseOutlined} from '@ant-design/icons';

const fontStyle: CSSProperties = {
    fontSize: 20,
}

export const AboutAuthor = () => {
    const {
        token: {  colorPrimaryTextActive },
    } = theme.useToken();

    return (
        <>
            <Row gutter={60}>
                <Col span={16} style={{}}>
                    <div style={{padding: '0 24px'}}>
                    <Typography.Title level={1} style={{marginBottom: '40px'}}>
                        Об авторе
                    </Typography.Title>
                        <div style={{marginBottom: '40px'}}>
                    <Typography.Title level={2} style={{marginBottom: '4px'}}>
                        Петров Артур Игоревич
                    </Typography.Title>
                    <p style={fontStyle}>Доцент, кандидат технических наук</p>
                        </div>
                        <div style={{marginBottom: '40px'}}>
                    <Typography.Title level={3} style={{ color: colorPrimaryTextActive }}>
                        Область научных интересов
                    </Typography.Title>
                    <ul style={fontStyle}>
                        <li>
                            Оптимизация функционирования транспортных систем (оценка из текущего состояния, поиск возможностей совершенствования режимов их функционирования)
                        </li>
                        <li>
                            Разработка путей совершенствования управления транспортными системами
                        </li>
                    </ul>
                        </div>
                        <div style={{marginBottom: '40px'}}>
                    <Typography.Title level={3} style={{ color: colorPrimaryTextActive }}>
                        Направления научных исследований
                    </Typography.Title>
                    <p style={fontStyle}>
                        Транспортные системы и технологии, конструкция и эксплуатация транспортно-технологических машин
                    </p>
                        </div>
                        <Flex gap={'24px'}>
                            <Card>
                            <Statistic title={'Общее количество статей'} value={'> 300'} valueStyle={{color: colorPrimaryTextActive}}/>
                            </Card>
                            <Card>
                            <Statistic title={'Количество статей в изданиях, рецензируемых ВАК РФ'} value={'60'} valueStyle={{color: colorPrimaryTextActive}}/>
                            </Card>
                            <Card>
                                <Statistic title={'Количество статей в изданиях базы данных Scopus'} value={'31'} valueStyle={{color: colorPrimaryTextActive}}/>
                            </Card>
                        </Flex>
                    </div>
                </Col>
                <Col span={8}>
                    <img src={'/author.jpg'} alt={'author'} style={{borderRadius: '8px', maxHeight: '500px', width: 'auto'}}/>
                    <div style={{fontSize: '18px', marginTop: '24px'}}>
                    <p style={{fontWeight: 500}}>Контакты</p>
                    <a href={'mailto:petrovai@tyuiu.ru'}><MailOutlined/>&nbsp;&nbsp;petrovai@tyuiu.ru</a>
                    <p style={{fontWeight: 500, marginTop: '16px'}}>Профили в научных электронных библиотеках</p>
                    <a href={'https://www.scopus.com/authid/detail.uri?authorId=57191265004'}><BookOutlined/>&nbsp;&nbsp;Scopus</a>
                        <br/>
                    <a href={'https://www.elibrary.ru/author_items.asp?pubrole=100&authorid=242434&show_refs=1&show_option=0'}><DatabaseOutlined/>&nbsp;&nbsp;Elibrary</a>
                    </div>
                    </Col>
            </Row>
        </>
    );
};