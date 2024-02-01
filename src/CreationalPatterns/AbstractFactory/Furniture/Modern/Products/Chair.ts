import { Chair } from '../../Base';

export class ModernChair implements Chair {
	armrests = false;

	make(): void {
		console.log('make ModernChair');
	}
}
