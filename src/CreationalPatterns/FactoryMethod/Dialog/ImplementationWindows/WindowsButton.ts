import { Button } from '../Base/Button';

export class WindowsButton implements Button {
	render(): void {
		console.log('WindowsButton');
		console.log('that has another render logic');
	}

	onClick(f: () => void): void {
		console.log('WindowsButton onClick', f);
		console.log('dispatching event to Windows OS');
	}
}
