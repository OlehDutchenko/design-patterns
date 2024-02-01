import { FurnitureFactory } from '../Base';
import { ModernChair } from './Products/Chair';
import { ModernSofa } from './Products/Sofa';
import { ModernTable } from './Products/Table';

export class ModernFurnitureFactory extends FurnitureFactory {
	makeChair() {
		return new ModernChair();
	}
	makeSofa() {
		return new ModernSofa();
	}
	makeTable() {
		return new ModernTable();
	}
}
