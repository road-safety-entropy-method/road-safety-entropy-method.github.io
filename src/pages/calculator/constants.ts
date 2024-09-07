import {TCalculations, TCityCalculations, TEntropyClass, TForm} from "@/pages/calculator/types.ts";

export const tyumenRegionDemoValues: TForm = {
    systemType: 'region',
    population: 1,
    vehicles: 1,
    accidents: 1,
    injured: 1,
    deaths: 1
}

export const tyumenCityDemoValues: TForm = {
    systemType: 'city',
    population: 1,
    vehicles: undefined,
    accidents: 1,
    injured: 1,
    deaths: 1
}

export const russia2021Calculations: TCalculations = {
    systemType: 'region',
    wVehicles: 0.09,
    wAccidents: 0.623,
    wInjured: 0.032,
    wDeaths: 0.255,
    entropy: 0.969,
    relativeEntropy: 0.699,
}

export const moscow2021Calculations: TCityCalculations = {
    systemType: 'city',
    wVehicles: undefined,
    wAccidents: 0.6765,
    wInjured: 0.015,
    wDeaths: 0.3085,
    entropy: 0.69,
    relativeEntropy: 0.628,
}

export const regionEntropyValueToClass: Array<TEntropyClass> = [
    {
        minValue: -Infinity,
        maxValue: 0.651,
        class: 'I',
        subClass: '',
        desc: 'Очень высокий уровень организованности',
        alertType: 'success'
    },
    {
        minValue: 0.651,
        maxValue: 0.676,
        class: 'II',
        subClass: 'II-1',
        desc: 'Высокий уровень организованности',
        alertType: 'success'
    },
    {
        minValue: 0.676,
        maxValue: 0.701,
        class: 'II',
        subClass: 'II-2',
        desc: 'Высокий уровень организованности',
        alertType: 'success'
    },
    {
        minValue: 0.701,
        maxValue: 0.726,
        class: 'III',
        subClass: 'III-1',
        desc: 'Средний уровень организованности',
        alertType: 'info'
    },
    {
        minValue: 0.726,
        maxValue: 0.751,
        class: 'III',
        subClass: 'III-2',
        desc: 'Средний уровень организованности',
        alertType: 'info'
    },
    {
        minValue: 0.751,
        maxValue: 0.776,
        class: 'IV',
        subClass: 'IV-1',
        desc: 'Низкий уровень организованности',
        alertType: 'warning'
    },
    {
        minValue: 0.776,
        maxValue: 0.801,
        class: 'IV',
        subClass: 'IV-2',
        desc: 'Низкий уровень организованности',
        alertType: 'warning'
    },
    {
        minValue: 0.801,
        maxValue: Infinity,
        class: 'V',
        subClass: '',
        desc: 'Очень низкий уровень организованности',
        alertType: 'warning'
    },
]

export const cityEntropyValueToClass: Array<TEntropyClass> = [
    {
        minValue: -Infinity,
        maxValue: 0.581,
        class: 'I',
        subClass: '',
        desc: 'Очень высокий уровень организованности',
        alertType: 'success'
    },
    {
        minValue: 0.581,
        maxValue: 0.601,
        class: 'II',
        subClass: 'II-1',
        desc: 'Высокий уровень организованности',
        alertType: 'success'
    },
    {
        minValue: 0.601,
        maxValue: 0.621,
        class: 'II',
        subClass: 'II-2',
        desc: 'Высокий уровень организованности',
        alertType: 'success'
    },
    {
        minValue: 0.621,
        maxValue: 0.641,
        class: 'III',
        subClass: 'III-1',
        desc: 'Средний уровень организованности',
        alertType: 'info'
    },
    {
        minValue: 0.641,
        maxValue: 0.661,
        class: 'III',
        subClass: 'III-2',
        desc: 'Средний уровень организованности',
        alertType: 'info'
    },
    {
        minValue: 0.661,
        maxValue: 0.681,
        class: 'IV',
        subClass: 'IV-1',
        desc: 'Низкий уровень организованности',
        alertType: 'warning'
    },
    {
        minValue: 0.681,
        maxValue: 0.701,
        class: 'IV',
        subClass: 'IV-2',
        desc: 'Низкий уровень организованности',
        alertType: 'warning'
    },
    {
        minValue: 0.701,
        maxValue: Infinity,
        class: 'V',
        subClass: '',
        desc: 'Очень низкий уровень организованности',
        alertType: 'warning'
    },
]