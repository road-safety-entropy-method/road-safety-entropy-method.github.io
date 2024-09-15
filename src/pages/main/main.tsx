import {Typography} from "antd";
import { OptionCard } from "./option-card";

export const Main = () => {
    return (
       <>
           <div style={{display: 'flex', justifyContent: 'center'}}>
               <div style={{display: 'flex', flexDirection: 'column', width: '80%', alignItems: 'center'}}>
                   <Typography.Title level={1} style={{textAlign: 'center', marginBottom: '40px'}}>
                       Методика оценки степени организованности (энтропийной оценки качества структуры) систем обеспечения безопасности дорожного движения
                   </Typography.Title>
                   <div style={{marginBottom: '40px', fontSize: '20px'}}>
                       <p style={{marginBottom: '16px'}}>
                           Использование данной Методики позволяет выявлять специфические, характерные для определенного российского региона (города), особенности процесса формирования дорожно-транспортной аварийности.
                       </p>
                       <p style={{marginBottom: '8px'}}>
                           В частности, возможны:
                       </p>
                       <ul>
                           <li>
                               количественная и качественная оценка Относительной энтропии региональных (городских) систем обеспечения безопасности дорожного движения (БДД);
                           </li>
                           <li>
                               классификационная оценка степени организованности оцениваемой системы обеспечения БДД;
                           </li>
                           <li>
                               выявление проблемных, с позиции сравнения с модельной системой, звеньев изучаемого процесса формирования дорожно-транспортной аварийности для конкретной региональной (городской) системы обеспечения БДД.
                           </li>
                       </ul>
                   </div>
                   <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', columnGap: '80px'}}>
                       <OptionCard
                           title={'Для субъекта Российской Федерации 🏙'}
                           btnCalc={'Перейти к калькулятору'}
                           btnCalcLink={'/calculator-region'}
                           btnMethod={'Перейти к методике'}
                           btnMethodLink={'/method-region'}
                       />
                       <OptionCard
                           title={'Для города - регионального центра 🏘️'}
                           btnCalc={'Перейти к калькулятору'}
                           btnCalcLink={'/calculator-city'}
                           btnMethod={'Перейти к методике'}
                           btnMethodLink={'/method-city'}
                       />
                   </div>
               </div>
           </div>
       </>
    )
};