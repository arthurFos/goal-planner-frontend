import { Data } from '@angular/router';

export interface Goal {
    id: string;
    name: string;
    description: string;
    beginAt: Date;
    endAt: Data;
}
