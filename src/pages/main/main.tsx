import {Button, Card, Col, Form, Input, Row, Space, theme} from "antd";
import React from "react";

export const Main = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const [form] = Form.useForm();

  return (
      <Space direction="vertical" style={{display: 'flex'}}>
          <Card title={"Об авторе"} styles={{title: { textAlign: 'left' }, body: {textAlign: 'left'}}}>
              <p>Мы можем многое рассказать об авторе</p>
              <p>И мы обязательно расскажем</p>
          </Card>
          <Row gutter={40}>
              <Col span={8}>
                  <Form layout={'vertical'} form={form} >
                      <Form.Item label={"Basic input"} rules={[{required: true, message: 'fill the field'}]} name={"basic"}>
                          <Input placeholder="basic input" />
                      </Form.Item>
                      <Form.Item>
                          <Button htmlType={"submit"}>Рассчитать</Button>
                      </Form.Item>
                  </Form>
              </Col>
              <Col span={16}>
                  тут будут результаты
              </Col>
          </Row>
          <div
              style={{
                  padding: 24,
                  textAlign: 'center',
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
              }}
          >
              <p>long content</p>
              {
                  // indicates very long content
                  Array.from({ length: 100 }, (_, index) => (
                      <React.Fragment key={index}>
                          {index % 20 === 0 && index ? 'more' : '...'}
                          <br />
                      </React.Fragment>
                  ))
              }
          </div>
      </Space>
  ) ;
};