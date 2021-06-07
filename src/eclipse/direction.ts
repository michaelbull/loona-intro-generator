import { DOM } from './dom';

export type Direction = 'ltr' | 'rtl';

export function currentDirection(dom: DOM): Direction {
    if (dom.directionLtrElement.checked) {
        return 'ltr';
    } else {
        return 'rtl';
    }
}
