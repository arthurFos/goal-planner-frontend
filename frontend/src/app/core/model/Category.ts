import { Goal } from './Goal';

export interface Category {
    id: string;
    name: string;
    description: string;
    goals: Goal[];
}
