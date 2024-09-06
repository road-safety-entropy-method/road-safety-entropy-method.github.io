type TBasicFields = {
    population: number;
    accidents: number;
    injured: number;
    deaths: number;
}

type TCityForm = TBasicFields & {
    systemType: 'city';
    vehicles: never;
}

type TRegionForm = TBasicFields & {
    systemType: 'region';
    vehicles: number;
}

export type TForm = TCityForm | TRegionForm;

export type TCalculations = {
    wVehicles?: number;
    wAccidents: number;
    wInjured: number;
    wDeaths: number;
    entropy: number;
    relativeEntropy: number;
}
