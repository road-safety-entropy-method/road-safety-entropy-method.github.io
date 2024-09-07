import {AlertProps} from "antd/es/alert/Alert";

export type TSystemType = 'region' | 'city';

type TBasicFields = {
    population: number;
    accidents: number;
    injured: number;
    deaths: number;
}

type TRegionForm = TBasicFields & {
    systemType: 'region';
    vehicles: number;
}

type TCityForm = TBasicFields & {
    systemType: 'city';
    vehicles: undefined;
}

export type TForm = TRegionForm | TCityForm;

type TBasicCalculations = {
    wAccidents: number;
    wInjured: number;
    wDeaths: number;
    entropy: number;
    relativeEntropy: number;
}

export type TCityCalculations = TBasicCalculations & {
    systemType: 'city';
    wVehicles: undefined;
}

export type TRegionCalculations = TBasicCalculations & {
    systemType: 'region';
    wVehicles: number;
}

export type TCalculations = TRegionCalculations | TCityCalculations;

export type TCalculationKey = Exclude<keyof TCalculations, 'systemType'>;

export type TEntropyClass = {
    minValue: number;
    maxValue: number;
    class: string;
    subClass: string;
    desc: string;
    alertType: AlertProps["type"];
}
