import { Goal } from './Goal';

export interface User {
    id: string;
    firstname: string;
    lastname: string;
    goals: Goal[];
}
