import {TForm, TCalculations} from "./types";

const roundValue = (value: number) => {
    return Number(value.toFixed(3));
}

const calculateEntropy = (...w: Array<number>) => {
    return -w.reduce((acc, wItem) => acc + wItem * Math.log(wItem), 0);
};

export const calculate = (values: TForm): TCalculations => {
    const { systemType, population, vehicles, accidents, injured, deaths } = values;
    if (systemType === 'region') {
        const kVehicles = vehicles / population;
        const kAccidents = accidents / vehicles;
        const kInjured = injured / accidents;
        const kDeaths = deaths / injured;

        const qVehicles = Math.log(1 / kVehicles);
        const qAccidents = Math.log(1 / kAccidents);
        const qInjured = Math.log(kInjured);
        const qDeaths = Math.log(1 / kDeaths);

        const q = qVehicles + qAccidents + qInjured + qDeaths;

        const wVehicles = qVehicles / q;
        const wAccidents = qAccidents / q;
        const wInjured = qInjured / q;
        const wDeaths = qDeaths / q;

        const entropy = calculateEntropy(wVehicles, wAccidents, wInjured, wDeaths);
        const relativeEntropy = entropy / Math.log(4);

        return {
            wVehicles: roundValue(wVehicles),
            wAccidents: roundValue(wAccidents),
            wInjured: roundValue(wInjured),
            wDeaths: roundValue(wDeaths),
            entropy: roundValue(entropy),
            relativeEntropy: roundValue(relativeEntropy)
        };
    }

    if (systemType === 'city') {
        // const kVehicles = vehicles / population;
        const kAccidents = accidents / population;
        const kInjured = injured / accidents;
        const kDeaths = deaths / injured;

        // const qVehicles = Math.log(1 / kVehicles);
        const qAccidents = Math.log(1 / kAccidents);
        const qInjured = Math.log(kInjured);
        const qDeaths = Math.log(1 / kDeaths);

        const q = qAccidents + qInjured + qDeaths;

        // const wVehicles = qVehicles / q;
        const wAccidents = qAccidents / q;
        const wInjured = qInjured / q;
        const wDeaths = qDeaths / q;

        const entropy = calculateEntropy(wAccidents, wInjured, wDeaths);
        const relativeEntropy = entropy / Math.log(3);

        return {
            wAccidents: roundValue(wAccidents),
            wInjured: roundValue(wInjured),
            wDeaths: roundValue(wDeaths),
            entropy: roundValue(entropy),
            relativeEntropy: roundValue(relativeEntropy)
        };
    }

    throw new Error('Несуществующий тип системы')
};