import { Injectable } from '@angular/core';
import { Minister } from './minister';
import { MINISTERS, MINISTERS_DETAILS } from './mock-minister';
import {VOTES} from './mock-vote';
import {Vote} from './vote';

@Injectable()
export class MinisterService {
    getMinisters(): Promise<Minister[]>
    {
       return Promise.resolve(MINISTERS);
    }

    getMinisterVotes(id: number):Promise<Vote[]>
    {
        return Promise.resolve(VOTES);
    }
    
    getMinistersWithDetails(): Promise<Minister[]>
    {
       return Promise.resolve(MINISTERS_DETAILS);
    }
    
    getMinsterDetail(id: number): Promise<Minister> {
        return  this.getMinistersWithDetails()
            .then(ministers => ministers.find(minister => minister.id === id));
    }

    getMinister(id: number): Promise<Minister> {
        return  this.getMinisters()
            .then(ministers => ministers.find(minister => minister.id === id));
    }
}