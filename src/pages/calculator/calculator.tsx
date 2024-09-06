/// <reference types="vite-plugin-svgr/client" />
import {
    Button,
    Card,
    Col,
    Form,
    FormRule,
    InputNumber,
    Row,
    Select,
    Space,
    TableProps,
    Typography
} from "antd";
import {TCalculations, TForm} from "./types";
import {calculate} from "@/pages/calculator/utils.ts";
import { useState} from "react";
import {moscow2021Calculations, russia2021Calculations} from "@/pages/calculator/constants.ts";
import {Result} from "@/pages/calculator/result.tsx";
import RoadSvg from './road.svg?react'

const requiredRule: FormRule = {required: true, message: 'Заполните поле'};

interface DataType {
    key: string;
    wVehicles: number | undefined;
    wAccidents: number;
    wInjured: number;
    wDeaths: number;
    entropy: number;
    relativeEntropy: number;
}

const getTableData = (systemType: 'region' | 'city', calculations: TCalculations | null): Array<DataType> | undefined => {
    if (!calculations) {
        return void 0;
    }
    const standardCalculations = systemType === 'region' ? russia2021Calculations : moscow2021Calculations;
    return [
        {
            key: 'Расчёты на основе введенных данных',
            wVehicles: calculations.wVehicles,
            wAccidents: calculations.wAccidents,
            wInjured: calculations.wInjured,
            wDeaths: calculations.wDeaths,
            entropy: calculations.entropy,
            relativeEntropy: calculations.relativeEntropy,
        },
        {
            key: 'Расчёты',
            wVehicles: standardCalculations.wVehicles,
            wAccidents: standardCalculations.wAccidents,
            wInjured: standardCalculations.wInjured,
            wDeaths: standardCalculations.wDeaths,
            entropy: standardCalculations.entropy,
            relativeEntropy: standardCalculations.relativeEntropy,
        }
    ];
}

const getColumns = (systemType: 'region' | 'city'): TableProps<DataType>['columns'] => {
    const columns: TableProps<DataType>['columns'] = [
        {
            title: '',
            dataIndex: 'key',
            rowScope: 'row',
        },
        {
            title: <i>w<sub>ra</sub></i>,
            dataIndex: 'wAccidents',
        },
        {
            title: <i>w<sub>v</sub></i>,
            dataIndex: 'wInjured',
        },
        {
            title: <i>w<sub>d</sub></i>,
            dataIndex: 'wDeaths',
        },
        {
            title: 'Энтропия',
            dataIndex: 'entropy',
        },
        {
            title: <>Относительная<br/>энтропия</>,
            dataIndex: 'relativeEntropy',
        }
    ]
    if (systemType === 'region') {
        columns.splice(1, 0,
            {
                title: <i>w<sub>vh</sub></i>,
                dataIndex: 'wVehicles',
            });
    }
    return columns;
}

export const Calculator = () => {
  const [form] = Form.useForm<TForm>();
  const systemType = Form.useWatch('systemType', form);

  const [currentCalculations, setCurrentCalculations] = useState<TCalculations|null>(null);

  const columns = getColumns(systemType);
  const tableData = getTableData(systemType, currentCalculations)

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
                      Калькулятор
                  </Typography.Title>
                  <Typography style={{fontSize: '18px', padding: '8px 0'}}>
                      Тут будет описание, что делает этот калькулятор. Тут будет описание, что делает этот калькулятор
                  </Typography>
              </div>
              <Card>
                  <Form layout={'vertical'} form={form} onFinish={onFinish} size={'large'}>
                      <Form.Item label={"Тип системы"} rules={[requiredRule]} name={'systemType'}>
                          <Select options={[
                              {
                                  value: 'region',
                                  label: 'Регион'
                              },
                              {
                                  value: 'city',
                                  label: 'Город'
                              }]}
                          />
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
                      <Form.Item>
                          <Button type={'primary'} htmlType={"submit"}>Рассчитать</Button>
                      </Form.Item>
                  </Form>
              </Card>
          </Col>
          <Col span={14}>
              {/*{currentCalculations &&*/}
              {/*    <Table columns={columns} dataSource={tableData} bordered pagination={false}/>*/}
              {/*}*/}
              {currentCalculations ?
                  <>
                      <Typography.Title level={2} style={{marginBottom: '8px'}}>
                          Результаты
                      </Typography.Title>
                      <Typography style={{fontSize: '18px', padding: '8px 0', marginBottom: '16px'}}>
                          Рассчитанные значения сравниваются со значениями в среднем по России.
                      </Typography>
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                <Result
                    type={'success'}
                    statisticTitle={<>w<sub>N</sub></>}
                    statisticValue={'0.078 < 0.090'}
                    description={<>Ситуация в сфере автомобилизации <b>лучше</b>, чем в целом по России, т.к. 0,078 &lt; 0,09. Чем меньше, тем лучше</>}
                />
                <Result
                    type={'warning'}
                    statisticTitle={<>w<sub>RA</sub></>}
                    statisticValue={'0.581 < 0.623'}
                    description={<>Ситуация в сфере формирования условий для ДТП <b>хуже</b>, чем в целом по России, т.к. 0,581 &lt; 0,623. Чем меньше, тем хуже</>}
                />
                <Result
                    type={'info'}
                    statisticTitle={<>w<sub>D</sub></>}
                    statisticValue={'0,303 > 0,255'}
                    description={<>Ситуация в сфере формирования условий для оказания скорой медицинской помощи <b>лучше</b>, чем в целом по России, т.к. 0,303 &gt; 0,255. Чем меньше, тем хуже</>}
                />
                <Result
                    type={'warning'}
                    statisticTitle={'Относительная энтропия'}
                    statisticValue={'0,699'}
                    description={<><b>Низкий</b> уровень организованности БДД – класс IV-2.</>}
                />
            </Space>
                  </>
                  :  <Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                      <Typography>Тут появятся результаты</Typography>
                      <RoadSvg style={{width: '500px'}}/>
                  </Card>
              }
        </Col>
      </Row>
          </>
  );
};