import { Chair } from './Products/Chair';
import { Sofa } from './Products/Sofa';
import { Table } from './Products/Table';

export abstract class FurnitureFactory {
	abstract makeChair(): Chair;
	abstract makeSofa(): Sofa;
	abstract makeTable(): Table;
}
