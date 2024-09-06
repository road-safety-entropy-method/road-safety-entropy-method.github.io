import {Alert, Card, Col, Row, Statistic, theme} from "antd";
import {ReactNode, useMemo} from "react";

type TProps = {
    type: 'success' | 'info' | 'warning';
    statisticTitle: React.ReactNode;
    statisticValue: string;
    description: ReactNode;
}

export const Result = ({ type, statisticTitle, statisticValue, description }: TProps) => {
    const {
        token: { colorSuccessText, colorWarningText, colorInfoText },
    } = theme.useToken();

    const color = useMemo(() => {
        if (type === 'success') return colorSuccessText;
        if (type === 'warning') return colorWarningText;
        if (type === 'info') return colorInfoText;
        return 'white';
    }, [type]);

  return (
      <Card>
          <Row gutter={16}>
              <Col span={8}>
                  <Card >
                      <Statistic title={statisticTitle} value={statisticValue} valueStyle={{color}}/>
                  </Card>
              </Col>
              <Col span={16} style={{display: 'flex', alignItems:'center'}}>
                  <Alert
                      type={type}
                      showIcon
                      description={description}
                      style={{width: '100%'}}
                  />
              </Col>
          </Row>
      </Card>
  );
};