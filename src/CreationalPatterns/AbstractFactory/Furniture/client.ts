import type { FurnitureFactory } from './Base';

interface Config {
	style: 'modern' | 'victorian';
}

export async function initialize(config: Config): Promise<FurnitureFactory> {
	if (config.style === 'modern') {
		const { ModernFurnitureFactory } = await import('./Modern/Factory');
		return new ModernFurnitureFactory();
	}
	if (config.style === 'victorian') {
		const { VictorianFurnitureFactory } = await import(
			'./Victorian/Factory'
		);
		return new VictorianFurnitureFactory();
	}
	throw new Error('Unknown furniture style!');
}
