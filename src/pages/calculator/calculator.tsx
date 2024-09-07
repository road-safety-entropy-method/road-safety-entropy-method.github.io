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

// interface DataType {
//     key: string;
//     wVehicles: number | undefined;
//     wAccidents: number;
//     wInjured: number;
//     wDeaths: number;
//     entropy: number;
//     relativeEntropy: number;
// }

// const getTableData = (systemType: 'region' | 'city', calculations: TCalculations | null): Array<DataType> | undefined => {
//     if (!calculations) {
//         return void 0;
//     }
//     const standardCalculations = systemType === 'region' ? russia2021Calculations : moscow2021Calculations;
//     return [
//         {
//             key: 'Расчёты на основе введенных данных',
//             wVehicles: calculations.wVehicles,
//             wAccidents: calculations.wAccidents,
//             wInjured: calculations.wInjured,
//             wDeaths: calculations.wDeaths,
//             entropy: calculations.entropy,
//             relativeEntropy: calculations.relativeEntropy,
//         },
//         {
//             key: 'Расчёты',
//             wVehicles: standardCalculations.wVehicles,
//             wAccidents: standardCalculations.wAccidents,
//             wInjured: standardCalculations.wInjured,
//             wDeaths: standardCalculations.wDeaths,
//             entropy: standardCalculations.entropy,
//             relativeEntropy: standardCalculations.relativeEntropy,
//         }
//     ];
// }
//
// const getColumns = (systemType: 'region' | 'city'): TableProps<DataType>['columns'] => {
//     const columns: TableProps<DataType>['columns'] = [
//         {
//             title: '',
//             dataIndex: 'key',
//             rowScope: 'row',
//         },
//         {
//             title: <i>w<sub>ra</sub></i>,
//             dataIndex: 'wAccidents',
//         },
//         {
//             title: <i>w<sub>v</sub></i>,
//             dataIndex: 'wInjured',
//         },
//         {
//             title: <i>w<sub>d</sub></i>,
//             dataIndex: 'wDeaths',
//         },
//         {
//             title: 'Энтропия',
//             dataIndex: 'entropy',
//         },
//         {
//             title: <>Относительная<br/>энтропия</>,
//             dataIndex: 'relativeEntropy',
//         }
//     ]
//     if (systemType === 'region') {
//         columns.splice(1, 0,
//             {
//                 title: <i>w<sub>vh</sub></i>,
//                 dataIndex: 'wVehicles',
//             });
//     }
//     return columns;
// }

type TProps = {
    systemType: 'region' | 'city';
}

export const Calculator = ({ systemType }: TProps) => {
  const [form] = Form.useForm<TForm>();

  const [currentCalculations, setCurrentCalculations] = useState<TCalculations|null>(null);

    useEffect(() => {
        form.setFieldValue('systemType', systemType);
    }, [systemType]);

  // const columns = getColumns(systemType);
  // const tableData = getTableData(systemType, currentCalculations)

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
              {/*{currentCalculations &&*/}
              {/*    <Table columns={columns} dataSource={tableData} bordered pagination={false}/>*/}
              {/*}*/}
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