import {Injectable} from '@angular/core';
import {Developer} from "../models/developer.model";

@Injectable()
export class DevelopersStore {

    private developers: Map<number,Developer> = new Map<number, Developer>();

    constructor() { }

    public invalidateDevelopersStore():void{
       this.developers.clear();
    }

    public setDevelopers(developers: Developer[]): void{
        this.invalidateDevelopersStore();
        developers.forEach((d)=>{
            this.developers.set(d.id,d);
        })
    }
    public giveMeAllDevelopers(): Map<number,Developer>{
        return this.developers;
    }
    public findById(id: number): Developer{
        return this.developers.get(id);
    }

}