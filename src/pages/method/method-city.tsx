import {Card, Space, Typography} from "antd";
import {MathJax, MathJaxContext} from "better-react-mathjax";
import {Header} from "@/pages/method/header.tsx";
import {methodDivStyle, methodPCenterStyle, methodPStyle} from "@/pages/method/styles.ts";
import { EntropyTable } from "./entropy-table";
import {WeightsTableCity} from "@/pages/method/weights-table-city.tsx";
import {ScrollToElement} from "@/pages/method/scroll-to-element.tsx";
import {useLocation} from "react-router-dom";

export const MethodCity = () => {
    const location = useLocation();
    const { scrollTo } = location.state || {};

    return (
        <MathJaxContext config={{loader: { load: ["input/asciimath"] }}}>
            <Typography.Title level={1}>
                Методика оценки степени организованности систем обеспечения БДД для города-регионального центра 🏘️
            </Typography.Title>
            <Space  direction="vertical" size="middle" >
                <Card>
                    <Header tag={'Этап 1'}>
                        Структурирование изучаемой автотранспортной системы и описание процесса ее
                        функционирования и итогового результата в виде причинно-следственной цепочки, где каждый последующий
                        этап процесса порождается как следствие ранее выполненных этапов.
                    </Header>
                    <div style={methodDivStyle}>
                        <p style={methodPStyle}>Для городских систем обеспечения БДД используется 3-х-звенный механизм
                            информационной передачи</p>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <img src={"/city-scheme.png"} style={{width: '800px'}}/>
                        </div>
                    </div>
                </Card>
                <Card>
                    <Header tag={'Этап 2'}>
                        Определение численных значений коэффициентов <MathJax
                        inline>{"`K_i`"}</MathJax> информационной передачи по исследуемому каналу.
                    </Header>
                    <div style={methodDivStyle}>
                        <p style={methodPStyle}>Коэффициентом передачи <MathJax inline>{"`i`"}</MathJax>-звена является отношение
                            значений характеристики его выхода <MathJax inline>{"`A_{out}`"}</MathJax> к значению
                            характеристики
                            входа <MathJax inline>{"`A_{\"in\"}`"}</MathJax>.</p>
                        <p style={methodPCenterStyle}><MathJax inline>{"`K_i = A_{out} / A_{\"in\"}`"}</MathJax></p>
                        <p style={methodPStyle}>В частности, необходимо определить значения коэффициентов.
                            Для городских систем обеспечения БДД это делается с учетом:
                        </p>
                        <p style={{...methodPStyle, ...({display: "flex", gap: '24px', justifyContent: 'center'})}}>
                            <MathJax inline>{"`K_{RA} = N_{RA} / P;`"}</MathJax>
                            <MathJax inline>{"`K_{V} = N_{V} / N_{RA};`"}</MathJax>
                            <MathJax inline>{"`K_{D} = N_{D} / N_{V};`"}</MathJax>
                        </p>
                        <p style={methodPStyle}>
                            Идентификация значений коэффициентов <MathJax inline>{"`K_i`"}</MathJax> информационной передачи
                            по каналу позволяет расставить
                            приоритеты в сфере управления БДД за счет выявления так называемых «слабых» звеньев в
                            причинно-следственном механизме формирования дорожно-транспортной аварийности.
                        </p>
                        <p style={methodPStyle}>
                            Так называемые «слабые» звенья в причинно-следственном механизме формирования
                            дорожно-транспортной
                            аварийности – те, для которых характерны максимально высокие значения коэффициентов передачи в
                            причинно-следственной цепочке формирования дорожно-транспортной аварийности.
                        </p>
                        <p style={methodPStyle}>
                            Однако само по себе представление о том, какие звенья причинно-следственной цепочки наиболее
                            значимы
                            в процессе формирования дорожно-транспортной аварийности еще не является тем инструментом,
                            используя
                            который можно решить все проблемы. Ниже рассматривается идеология выявления «узких» мест
                            управления
                            БДД.
                        </p>
                    </div>
                </Card>
                <Card>
                    <Header tag={'Этап 3'}>
                        Определение так называемого позитива или положительного вклада <MathJax
                        inline>{"`Q`"}</MathJax> относительно веса соответствующего звена исследуемого трансформационного
                        процесса в объектно-смысловой цепочке передачи информации «Население – &lt;…&gt; – Число погибших в
                        ДТП».
                    </Header>
                    <div style={methodDivStyle}>
                        <p style={methodPStyle}>
                            Физический смысл положительного вклада <MathJax inline>{"`Q`"}</MathJax> различных элементов цепочки
                            «Население – &lt;…&gt; – Число погибших в ДТП» в конечный результат дорожно-транспортной аварийности
                            является мерой объема информации или производной энтропии исследуемого процесса.
                        </p>
                        <p style={methodPStyle}>
                            Для треххзвенной методики определения энтропии <MathJax inline>{"`H_3`"}</MathJax>, используемой в случае городских систем ОБДД, это можно сделать согласно:
                        </p>
                        <p style={methodPCenterStyle}>
                            <MathJax>{"`Q = Q_{RA} + Q_{V} + Q_{D} = ln(1/K_{RA}) + ln(K_{V}) + ln(1/K_{D})`"}</MathJax>
                        </p>
                        <p style={methodPStyle}>
                            Т.к. <MathJax inline>{"`ln`"}</MathJax> от числа <MathJax inline>{"`X_i > 1`"}</MathJax> принимает
                            отрицательное значение, то необходимо избавиться от этого эффекта. С этой целью, при
                            расчете <MathJax inline>{"`Q_V`"}</MathJax> используется расчет <MathJax
                            inline>{"`ln`"}</MathJax> применительно к прямой величине <MathJax inline>{"`K_V`"}</MathJax>, в то
                            время, как при расчете <MathJax inline>{"`Q_{RA}, Q_{D}`"}</MathJax> используется
                            расчет <MathJax inline>{"`ln`"}</MathJax> применительно к обратным величинам <MathJax
                            inline>{"`1/K_{RA}, 1/K_D`"}</MathJax>.
                        </p>
                    </div>
                </Card>
                <Card>
                    <Header tag={'Этап 4'}>
                        Определение численных значений весовых коэффициентов для оценки положительного вклада <MathJax
                        inline>{"`Q`"}</MathJax> различных элементов цепочки «Население – &lt;…&gt; – Число погибших в ДТП».
                    </Header>
                    <div style={methodDivStyle}>
                        <p style={methodPStyle}>
                            Для этого используется алгоритм
                        </p>
                        <p style={methodPCenterStyle}>
                            <MathJax>{"`w_i = Q_i/Q`"}</MathJax>
                        </p>
                        <p style={methodPStyle}>
                            Наличие расчетных значений <MathJax inline>{"`w_i`"}</MathJax>, а именно <MathJax
                            inline>{"`w_{RA}, w_V, w_D`"}</MathJax> для варианта городских систем ОБДД позволяет оценить
                            степень относительного влияния («веса») различных блоков (трех этапов трансформации информации)
                            исследуемой причинно-следственной цепочки на формирование итоговых характеристик
                            дорожно-транспортной аварийности.
                        </p>
                        <p style={methodPStyle}>
                            Наличие расчетных значений веса позитива <MathJax inline>{"`w_i`"}</MathJax> различных звеньев
                            причинно-следственной цепочки позволяет решать главную задачу энтропийного анализа – оценивать
                            степень влияния различных блоков (звеньев) цепочки передачи информации в формирование итогового
                            результата – состояния системы обеспечения БДД.
                        </p>
                    </div>
                </Card>
                <Card>
                    <Header tag={'Этап 5'}>
                        Определение логарифмированных значений «веса» позитива <MathJax inline>{"`w_i`"}</MathJax> различных звеньев причинно-следственной цепочки и их произведения с «весами» позитива <MathJax inline>{"`w_i`"}</MathJax>.
                    </Header>
                    <div style={methodDivStyle}>
                        <p style={methodPStyle}>
                            Т.к. в классической формуле К. Шеннона используются именно логарифмированные значения «весов», то необходимо сначала вычислить натуральные логарифмы соответствующих «весов» позитива звеньев цепочки, а затем и итоги перемножения логарифмов соответствующих «весов» не значения «веса».
                        </p>
                    </div>
                </Card>
                <Card>
                    <Header tag={'Этап 6'}>
                        Непосредственный расчет энтропии процесса обеспечения БДД по классической формуле К.Э. Шеннона
                    </Header>
                    <div style={methodDivStyle}>
                        <p style={methodPStyle}>
                            <MathJax inline>{"`H = -sum_(i=1)^n w_i*ln_{w_i}`"}</MathJax>, где <MathJax inline>{"`n`"}</MathJax> - число звеньев причинно-следственной цепочки формирования дорожно-транспортной аварийности, <MathJax inline>{"`w_i`"}</MathJax> - весовые коэффициенты позитива звеньев цепочки, отвечающие условию нормировки <MathJax inline>{"`H = sum_(i=1)^n w_i = 1`"}</MathJax>
                        </p>
                    </div>
                </Card>
                <Card>
                    <Header tag={'Этап 7'}>
                        Расчет Относительной энтропии  <MathJax inline>{"`H_3`"}</MathJax> БДД процесса обеспечения БДД может быть осуществлен по формуле
                    </Header>
                    <div style={methodDivStyle}>
                        <p style={methodPStyle}>
                            <MathJax inline>{"`H_3 = (-sum_(i=1)^3 w_i*ln_{w_i})/ln(3)`"}</MathJax>, где 3 - это число звеньев причинно-следственной цепочки формирования дорожно-транспортной аварийности.
                        </p>
                    </div>
                </Card>
                <Card id={'entropy-table'}>
                    <Header tag={'Этап 8'}>
                        Определение, в рамках Классификации уровня организованности систем ОБДД по величине Относительной энтропии <MathJax inline>{"`H_3`"}</MathJax> БДД процесса обеспечения БДД.
                    </Header>
                    <div style={methodDivStyle}>
                        <p style={methodPStyle}>
                            Энтропийная классификация систем обеспечения БДД городов-региональных центров РФ по уровням системной организованности (2025). Система оценок <MathJax inline>{"`H_3`"}</MathJax>
                        </p>
                        <EntropyTable data={{
                            highest: '< 0,550',
                            highOne: '0,551…0,575',
                            highTwo: '0,576…0,600',
                            mediumOne: '0,601…0,625',
                            mediumTwo: '0,626…0,650',
                            lowOne: '0,651…0,675',
                            lowTwo: '0,676…0,700',
                            lowest: '> 0.701'
                        }}/>
                    </div>
                </Card>
                <Card>
                    <Header tag={'Этап 9'}>
                        Идентификация ранговой иерархии «болевых» или «критических» проблем систем обеспечения БДД.
                    </Header>
                    <div style={methodDivStyle}>
                        <p style={methodPStyle}>
                            Процедура определения ранговой иерархии «болевых» проблем связана со сравнением фактических
                            расчетных значений соответствующих «весов» <MathJax inline>{"`w_i`"}</MathJax> звеньев
                            причинно-следственной цепочки с общероссийскими значениями <MathJax inline>{"`w_i`"}</MathJax>.
                        </p>
                        <p style={methodPStyle}>
                            Базовые, принятые за стандарт значения «весов» <MathJax inline>{"`w_i`"}</MathJax> звеньев причинно-следственной цепочки (2025) для городов РФ. Система оценок <MathJax inline>{"`H_3`"}</MathJax>
                        </p>
                        <WeightsTableCity/>
                    </div>
                </Card>
            </Space>
            {scrollTo && <ScrollToElement elementId={scrollTo} />}
        </MathJaxContext>
    );
};