export interface Button {
	render(): void;
	onClick(f: () => void): void;
}
