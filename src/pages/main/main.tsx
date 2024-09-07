import {Typography} from "antd";
import { OptionCard } from "./option-card";

export const Main = () => {
    return (
       <>
           <div style={{display: 'flex', justifyContent: 'center'}}>
               <div style={{display: 'flex', flexDirection: 'column', width: '80%', alignItems: 'center'}}>
                   <Typography.Title level={1} style={{textAlign: 'center', marginBottom: '40px'}}>
                       Методика оценки степени организованности систем обеспечения БДД
                   </Typography.Title>
                   <div style={{marginBottom: '40px'}}>
                       <p style={{fontSize: '20px'}}>Тут надо кратко и понятно описать, что это такое, и когда
                           пригодится.</p>
                   </div>
                   <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', columnGap: '80px'}}>
                       <OptionCard
                           title={'Для региона 🏙'}
                           desc={'Тут возможно мини-описание.'}
                           btnCalc={'Перейти к калькулятору для региона'}
                           btnCalcLink={'/calculator-region'}
                           btnMethod={'Перейти к методике для региона'}
                           btnMethodLink={'/method-region'}
                       />
                       <OptionCard
                           title={'Для города 🏘️'}
                           desc={'И тут возможно мини-описание.'}
                           btnCalc={'Перейти к калькулятору для города'}
                           btnCalcLink={'/calculator-city'}
                           btnMethod={'Перейти к методике для города'}
                           btnMethodLink={'/method-city'}
                       />
                   </div>
               </div>
           </div>
       </>
    )
};