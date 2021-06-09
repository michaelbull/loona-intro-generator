import { animate } from './animate';

export interface DOM {
    readonly durationElement: HTMLInputElement;
    readonly branchWidthElement: HTMLInputElement;
    readonly bondWidthElement: HTMLInputElement;
    readonly backgroundColorElement: HTMLInputElement;
    readonly atomsColorElement: HTMLInputElement;
    readonly bondsColorElement: HTMLInputElement;
    readonly branchesColorElement: HTMLInputElement;
    readonly nameColorElement: HTMLInputElement;
    readonly logoColorElement: HTMLInputElement;
    readonly startElement: HTMLButtonElement;
}

export function parseDom(doc: Document = document): DOM {
    return {
        durationElement: doc.getElementById('duration') as HTMLInputElement,
        branchWidthElement: doc.getElementById('width-branch') as HTMLInputElement,
        bondWidthElement: doc.getElementById('width-bond') as HTMLInputElement,
        backgroundColorElement: doc.getElementById('color-background') as HTMLInputElement,
        atomsColorElement: doc.getElementById('color-atoms') as HTMLInputElement,
        bondsColorElement: doc.getElementById('color-bonds') as HTMLInputElement,
        branchesColorElement: doc.getElementById('color-branches') as HTMLInputElement,
        nameColorElement: doc.getElementById('color-name') as HTMLInputElement,
        logoColorElement: doc.getElementById('color-logo') as HTMLInputElement,
        startElement: doc.getElementById('start') as HTMLButtonElement
    };
}

export function addEventListeners(dom: DOM): void {
    dom.startElement.addEventListener('click', () => animate(dom));
}
