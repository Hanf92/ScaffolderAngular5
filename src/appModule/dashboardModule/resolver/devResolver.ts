import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {DevelopersService} from "../providers/developers.service";
import {Observable} from "rxjs/Observable";
import {Developer} from "../models/developer.model";

@Injectable()
export class DevResolver implements Resolve<any>{

    constructor(private devStore: DevelopersService) {}

    public resolve(route: ActivatedRouteSnapshot): Observable<Map<number,Developer>> {
        return this.devStore.getDevelopers()
    }
}
