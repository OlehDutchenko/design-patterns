import { Sofa } from '../../Base';

export class VictorianSofa implements Sofa {
	folding = false;

	make(): void {
		console.log('make VictorianSofa');
	}
}
