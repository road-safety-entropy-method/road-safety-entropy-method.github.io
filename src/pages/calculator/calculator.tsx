import {Button, Col, Form, FormRule, InputNumber, Row, Select, Table, TableProps} from "antd";
import {TCalculations, TForm} from "./types";
import {calculate} from "@/pages/calculator/utils.ts";
import { useState} from "react";
import {moscow2021Calculations, russia2021Calculations} from "@/pages/calculator/constants.ts";

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
      <Row gutter={32}>
        <Col span={8}>
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
              <InputNumber placeholder="0" style={{width: '100%'}} min={1} precision={0} />
            </Form.Item>
              {systemType === 'region' &&
              <Form.Item label={"Количество транспортных средств"} rules={[requiredRule]} name={"vehicles"}>
                  <InputNumber placeholder="0" style={{width: '100%'}} min={1} precision={0} />
              </Form.Item>}
              <Form.Item label={"Количество ДТП"} rules={[requiredRule]} name={"accidents"}>
                  <InputNumber placeholder="0" style={{width: '100%'}} min={1} precision={0} />
              </Form.Item>
              <Form.Item label={"Количество пострадавших"} rules={[requiredRule]} name={"injured"}>
                  <InputNumber placeholder="0" style={{width: '100%'}} min={1} precision={0} />
              </Form.Item>
              <Form.Item label={"Количество погибших"} rules={[requiredRule]} name={"deaths"}>
                  <InputNumber placeholder="0" style={{width: '100%'}} min={1} precision={0} />
              </Form.Item>
            <Form.Item>
              <Button htmlType={"submit"}>Рассчитать</Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={16}>
            {currentCalculations &&
              <Table columns={columns} dataSource={tableData} bordered pagination={false} />
            }

            а ниже будет объяснение, что эта таблица означает
        </Col>
      </Row>
  );
};