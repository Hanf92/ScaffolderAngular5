enum DeveloperRole{
    PM = 'PROJECT MANAGER',
    DEV = 'DEVELOPER',
    GD = 'GRAPHIC DESIGNER',
    AM = 'ACCOUNT MANAGER'
}
export interface Developer{
    id: number,
    name: string,
    surname: string,
    role: DeveloperRole
}