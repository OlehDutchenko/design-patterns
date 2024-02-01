import { Chair } from '../../Base';

export class VictorianChair implements Chair {
	armrests = true;

	make(): void {
		console.log('make VictorianChair');
	}
}
