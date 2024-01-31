import { Button } from '../Base/Button';

export class WebButton implements Button {
	render(): void {
		console.log('HTMLButton');
	}

	onClick(f: () => void): void {
		console.log('HTMLButton onClick', f);
	}
}
