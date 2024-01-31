import { Dialog } from '../Base/Dialog';
import { Button } from '../Base/Button';
import { WebButton } from './WebButton';

export class WebDialog extends Dialog {
	protected createButton(): Button {
		return new WebButton();
	}

	protected closeDialog(): void {
		console.log('HTML way to close the Dialog');
	}
}
