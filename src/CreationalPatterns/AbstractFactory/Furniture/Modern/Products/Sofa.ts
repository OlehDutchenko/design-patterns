import { Sofa } from '../../Base';

export class ModernSofa implements Sofa {
	folding = true;

	make(): void {
		console.log('make ModernSofa');
	}
}
