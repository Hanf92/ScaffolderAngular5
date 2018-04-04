export enum Environment{
    DEV = 'DEV',
    PROD = 'PROD'
}
export interface Configuration{
    endpoint: string;
    env: Environment
}