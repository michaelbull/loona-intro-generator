import { animate } from './animate';
import { applyTheme } from './theme';

export interface DOM {
    readonly durationElement: HTMLInputElement;
    readonly themeElement: HTMLSelectElement;
    readonly directionLtrElement: HTMLInputElement;
    readonly directionRtlElement: HTMLInputElement;
    readonly eclipseStartColorElement: HTMLInputElement;
    readonly eclipseEndColorElement: HTMLInputElement;
    readonly backgroundStartColorElement: HTMLInputElement;
    readonly backgroundEndColorElement: HTMLInputElement;
    readonly loonaStartColorElement: HTMLInputElement;
    readonly loonaEndColorElement: HTMLInputElement;
    readonly slashStartColorElement: HTMLInputElement;
    readonly slashEndColorElement: HTMLInputElement;
    readonly startElement: HTMLButtonElement;
}

export function parseDom(doc: Document = document): DOM {
    return {
        durationElement: doc.getElementById('duration') as HTMLInputElement,
        themeElement: doc.getElementById('theme') as HTMLSelectElement,
        directionLtrElement: doc.getElementById('direction-ltr') as HTMLInputElement,
        directionRtlElement: doc.getElementById('direction-rtl') as HTMLInputElement,
        eclipseStartColorElement: doc.getElementById('color-eclipse-start') as HTMLInputElement,
        eclipseEndColorElement: doc.getElementById('color-eclipse-end') as HTMLInputElement,
        backgroundStartColorElement: doc.getElementById('color-bg-start') as HTMLInputElement,
        backgroundEndColorElement: doc.getElementById('color-bg-end') as HTMLInputElement,
        loonaStartColorElement: doc.getElementById('color-loona-start') as HTMLInputElement,
        loonaEndColorElement: doc.getElementById('color-loona-end') as HTMLInputElement,
        slashStartColorElement: doc.getElementById('color-slash-start') as HTMLInputElement,
        slashEndColorElement: doc.getElementById('color-slash-end') as HTMLInputElement,
        startElement: doc.getElementById('start') as HTMLButtonElement,
    }
}

export function addEventListeners(dom: DOM): void {
    dom.startElement.addEventListener('click', () => animate(dom));
    dom.themeElement.addEventListener('change', () => applyTheme(dom));
}
