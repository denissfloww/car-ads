
interface StatusParams {
    [index: string]: { description: string; color: string; };
}

export const AdStatus: StatusParams = {
    'Active': {
        description: 'Активно',
        color: '#388e3c'
    },
    'Sell': {
        description: 'Продано',
        color: 'red'
    }
};

export enum Status {
    Sell = 'Sell',
    Active = 'Active',
}