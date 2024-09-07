import {Alert, Card, Col, Row, Statistic, theme} from "antd";
import { ReactNode, useMemo} from "react";
import {TCalculationKey, TSystemType} from "@/pages/calculator/types.ts";
import {
    cityEntropyValueToClass,
    moscow2021Calculations,
    regionEntropyValueToClass,
    russia2021Calculations
} from "@/pages/calculator/constants.ts";
import {AlertProps} from "antd/es/alert/Alert";

const calculationKeyToSymbol: Record<TCalculationKey, ReactNode> = {
    wVehicles: <>w<sub>N</sub></>,
    wAccidents: <>w<sub>RA</sub></>,
    wInjured:<>w<sub>V</sub></>,
    wDeaths:<>w<sub>D</sub></>,
    entropy: 'Энтропия',
    relativeEntropy: 'Относительная энтропия',
}

const calculationKeyToWhatsBest: Record<TCalculationKey, 'smallest' | 'highest'> = {
    wVehicles: 'smallest',
    wAccidents: 'highest',
    // не учитывается
    wInjured: 'smallest',
    wDeaths: 'highest',
    // не учитывается
    entropy: 'smallest',
    // не учитывается
    relativeEntropy: 'smallest',
}

const calculationKeyToDescription: Record<TCalculationKey, ReactNode> = {
    wVehicles: 'Ситуация в сфере автомобилизации',
    wAccidents: 'Ситуация в сфере формирования условий для ДТП',
    // не учитывается
    wInjured: '',
    wDeaths: 'Ситуация в сфере формирования условий для оказания скорой медицинской помощи',
    // не учитывается
    entropy: '',
    // не учитывается
    relativeEntropy: '',
}

type TProps = {
    systemType: TSystemType;
    calculationKey: TCalculationKey;
    calculatedValue: number;
}

export const Result = ({ systemType, calculationKey, calculatedValue }: TProps) => {
    const standardValue = systemType === 'region' ? russia2021Calculations[calculationKey] : moscow2021Calculations[calculationKey];

    const stateType = useMemo(() => {
        // @ts-expect-error ---
        if (Math.abs(calculatedValue - standardValue) < 0.03) return 'info';

        const whatsBest = calculationKeyToWhatsBest[calculationKey];
        // @ts-expect-error ---
        if (calculatedValue < standardValue) {
            return whatsBest === 'smallest' ? 'success' : 'warning';
        }
        return whatsBest === 'highest' ? 'success' : 'warning';
    }, [standardValue, calculatedValue, calculationKey]);

    const statisticValue = useMemo(() => {
        // @ts-expect-error ---
        if (calculatedValue < standardValue) return `${calculatedValue} < ${standardValue}`;
        if (calculatedValue === standardValue) return `${calculatedValue} = ${standardValue}`;
        return `${calculatedValue} > ${standardValue}`;
    }, [standardValue, calculatedValue]);

    const description = useMemo(() => {
        let compare = <></>;
        if (stateType === 'success') {
            compare = <><b>лучше</b>, чем</>;
        }
        if (stateType === 'warning') {
            compare = <><b>хуже</b>, чем</>;
        }
        if (stateType === 'info') {
            compare = <><b>такая же</b>, как</>;
        }
        const area = systemType === 'region' ? 'в целом по России' : 'в Москве'
        return <>{calculationKeyToDescription[calculationKey]} {compare} {area}.</>
    }, [calculationKey, stateType, systemType]);

    return (
        <ResultView
            statisticTitle={calculationKeyToSymbol[calculationKey]}
            statisticValue={statisticValue}
            alertType={stateType}
            description={description}
        />
    )
};

type TEntropyResultProps = {
    systemType: TSystemType;
    value: number;
}

export const EntropyResult = ({ systemType, value }: TEntropyResultProps) => {
    const classes = systemType === 'region' ? regionEntropyValueToClass : cityEntropyValueToClass;
    const cls = classes.find((cls) => value >= cls.minValue && value < cls.maxValue);

  return (
      <ResultView
          statisticTitle={'Относительная энтропия'}
          statisticValue={value.toString()}
          alertType={cls?.alertType}
          description={`${cls?.desc} - класс ${cls?.subClass || cls?.class}`}
      />
  )
};

type TResultViewProps = {
    statisticTitle: ReactNode;
    statisticValue: string;
    alertType: AlertProps["type"];
    description: ReactNode;
}

const ResultView = ({
    statisticTitle,
    statisticValue,
    alertType,
    description
                    }: TResultViewProps) => {
    const {
        token: { colorSuccessText, colorWarningText, colorInfoText },
    } = theme.useToken();

    const color = useMemo(() => {
        if (alertType === 'success') return colorSuccessText;
        if (alertType === 'warning') return colorWarningText;
        if (alertType === 'info') return colorInfoText;
        return 'black';
    }, [alertType]);

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
                        type={alertType}
                        showIcon
                        description={description}
                        style={{width: '100%', fontSize: '16px'}}
                    />
                </Col>
            </Row>
        </Card>
    );
};