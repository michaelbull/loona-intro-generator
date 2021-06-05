import { DOM } from './dom';

export type EclipseDirection = 'ltr' | 'rtl';

export function eclipseDirection(dom: DOM): EclipseDirection {
    if (dom.directionLtrElement.checked) {
        return 'ltr';
    } else {
        return 'rtl';
    }
}
