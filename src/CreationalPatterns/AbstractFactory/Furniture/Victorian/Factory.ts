import { FurnitureFactory } from '../Base';
import { VictorianChair } from './Products/Chair';
import { VictorianSofa } from './Products/Sofa';
import { VictorianTable } from './Products/Table';

export class VictorianFurnitureFactory extends FurnitureFactory {
	makeChair() {
		return new VictorianChair();
	}
	makeSofa() {
		return new VictorianSofa();
	}
	makeTable() {
		return new VictorianTable();
	}
}
