import { DOM } from './dom';

export interface ColorPalette {
    readonly branchWidth: string;
    readonly bondWidth: string;
    readonly background: string;
    readonly atoms: string;
    readonly bonds: string;
    readonly branches: string;
    readonly name: string;
    readonly logo: string;
}

export function currentColorPalette(dom: DOM): ColorPalette {
    return {
        branchWidth: dom.branchWidthElement.value,
        bondWidth: dom.bondWidthElement.value,
        background: dom.backgroundColorElement.value,
        atoms: dom.atomsColorElement.value,
        bonds: dom.bondsColorElement.value,
        branches: dom.branchesColorElement.value,
        name: dom.nameColorElement.value,
        logo: dom.logoColorElement.value
    };
}
