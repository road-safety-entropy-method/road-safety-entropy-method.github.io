import {
    Button,
    Card,
    Col,
    Form,
    FormRule, Input,
    InputNumber,
    Row,
    Space,
    Typography
} from "antd";
import {TCalculations, TForm} from "./types";
import {calculate} from "@/pages/calculator/utils.ts";
import {useEffect, useState} from "react";
import {EntropyResult, Result} from "@/pages/calculator/result.tsx";
import {tyumenCityDemoValues, tyumenRegionDemoValues} from "@/pages/calculator/constants.ts";

const requiredRule: FormRule = {required: true, message: 'Заполните поле'};

type TProps = {
    systemType: 'region' | 'city';
}

export const Calculator = ({ systemType }: TProps) => {
  const [form] = Form.useForm<TForm>();

  const [currentCalculations, setCurrentCalculations] = useState<TCalculations|null>(null);

    useEffect(() => {
        form.setFieldValue('systemType', systemType);
    }, [systemType]);

  const onFinish = (values: TForm) => {
      const calculations = calculate(values);
      setCurrentCalculations(calculations);
  }

  return (
      <>
      <Row gutter={40} >
          <Col span={10}>
              <div style={{marginBottom: '24px'}}>
                  <Typography.Title level={1} style={{marginBottom: '8px'}}>
                      Калькулятор для {systemType === 'region' ? 'региона' : 'города'}
                  </Typography.Title>
                  <Typography style={{fontSize: '18px', padding: '8px 0'}}>
                      Тут будет описание, что делает этот калькулятор. Его надо нормально написать. Оно не должно быть слишком длинным. Подробности можно сделать в виде ссылки на методику. Можно также здесь написать, что есть демо-кнопка, которая позволяет подставить реальные данные по Тюменской области и Тюмени и посмотреть результаты для них.
                  </Typography>
              </div>
              <Card>
                  <Form layout={'vertical'} form={form} onFinish={onFinish} size={'large'}>
                      <Form.Item hidden name={'systemType'}>
                          <Input value={systemType}/>
                      </Form.Item>
                      <Form.Item label={"Количество людей"} rules={[requiredRule]} name={"population"}>
                          <InputNumber placeholder="0" style={{width: '100%'}} min={1} precision={0}/>
                      </Form.Item>
                      {systemType === 'region' &&
                          <Form.Item label={"Количество транспортных средств"} rules={[requiredRule]} name={"vehicles"}>
                              <InputNumber placeholder="0" style={{width: '100%'}} min={1} precision={0}/>
                          </Form.Item>}
                      <Form.Item label={"Количество ДТП"} rules={[requiredRule]} name={"accidents"}>
                          <InputNumber placeholder="0" style={{width: '100%'}} min={1} precision={0}/>
                      </Form.Item>
                      <Form.Item label={"Количество пострадавших"} rules={[requiredRule]} name={"injured"}>
                          <InputNumber placeholder="0" style={{width: '100%'}} min={1} precision={0}/>
                      </Form.Item>
                      <Form.Item label={"Количество погибших"} rules={[requiredRule]} name={"deaths"}>
                          <InputNumber placeholder="0" style={{width: '100%'}} min={1} precision={0}/>
                      </Form.Item>
                      <div style={{display: 'flex', gap: '24px'}}>
                          <Form.Item>
                              <Button type={'primary'} htmlType={"submit"}>Рассчитать</Button>
                          </Form.Item>
                          <Form.Item>
                              <Button onClick={() => {
                                  const values = systemType === 'region' ? tyumenRegionDemoValues : tyumenCityDemoValues;
                                  form.setFieldsValue(values)
                                  form.submit();
                              }}>Демо-пример</Button>
                          </Form.Item>
                      </div>
                  </Form>
              </Card>
          </Col>
          <Col span={14}>
              {currentCalculations &&
                  <>
                      <Typography.Title level={2} style={{marginBottom: '8px'}}>
                          Результаты
                      </Typography.Title>
                      <Typography style={{fontSize: '18px', padding: '8px 0', marginBottom: '16px'}}>
                          Рассчитанные значения сравниваются со значениями в {systemType === 'region' ? 'среднем по России' : 'Москве'}, которые были приняты за стандартные.
                      </Typography>
                        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                            {currentCalculations.systemType === 'region' && (
                                <Result
                                    systemType={systemType}
                                    calculationKey={'wVehicles'}
                                    calculatedValue={currentCalculations.wVehicles}
                                />
                            )}
                            <Result
                                systemType={systemType}
                                calculationKey={'wAccidents'}
                                calculatedValue={currentCalculations.wAccidents}
                            />
                            <Result
                                systemType={systemType}
                                calculationKey={'wDeaths'}
                                calculatedValue={currentCalculations.wDeaths}
                            />
                            <EntropyResult
                                systemType={systemType}
                                value={currentCalculations.relativeEntropy}
                            />
                        </Space>
                  </>
              }
        </Col>
      </Row>
    </>
  );
};