import { Dialog } from '../Base/Dialog';
import { Button } from '../Base/Button';
import { WindowsButton } from './WindowsButton';

export class WindowsDialog extends Dialog {
	protected createButton(): Button {
		return new WindowsButton();
	}

	protected closeDialog(): void {
		console.log('Windows OS way to close the Dialog');
	}
}
