import { Button } from './Button';

export abstract class Dialog {
	protected abstract createButton(): Button;

	public render(): void {
		this.renderCloseButton();
		// this.renderSomethingElse();
	}

	// Not accessible in the subclasses
	private renderCloseButton() {
		const closeButton = this.createButton();
		const handleClose = this.closeDialog.bind(this);
		closeButton.onClick(handleClose);
		closeButton.render();
	}

	protected abstract closeDialog(): void;
}
