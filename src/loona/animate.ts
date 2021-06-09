import { svgElements } from '../svg-elements';
import { currentColorPalette } from './color-palette';
import { currentDirection } from './direction';
import { DOM } from './dom';

const LOGO_ELEMENT_CLASSNAMES = [
    'loona',
    'loona__l',
    'loona__o1',
    'loona__o2',
    'loona__n',
    'loona__a',
    'loona__slash',
    'loona__circle',
    'loona__crescent',
    'loona__glyphs'
];

export function animate(dom: DOM): void {
    let duration = dom.durationElement.value;
    let elements = svgElements(LOGO_ELEMENT_CLASSNAMES);
    let direction = currentDirection(dom);
    let colors = currentColorPalette(dom);

    requestAnimationFrame(() => {
        elements.forEach(element => {
            let base = element.classList.item(0);
            element.classList.remove(`${base}--animating`);
            element.classList.remove(`${base}--ltr`);
            element.classList.remove(`${base}--rtl`);
            element.classList.remove(`${base}--ot12`);
            element.classList.remove(`${base}--ot12-reverse`);
        });
    });

    setTimeout(() => {
        elements.forEach(element => {
            let base = element.classList.item(0);

            element.style.animationDuration = duration;
            element.classList.add(`${base}--animating`);
            element.classList.add(`${base}--${direction}`);

            if (dom.ot12ColorElement.checked) {
                element.classList.add(`${base}--ot12`);
            }

            if (dom.ot12ReverseElement.checked) {
                element.classList.add(`${base}--ot12-reverse`);
            }

            element.style.setProperty('--color-bg-start', colors.backgroundStart);
            element.style.setProperty('--color-bg-end', colors.backgroundEnd);
            element.style.setProperty('--color-eclipse-start', colors.eclipseStart);
            element.style.setProperty('--color-eclipse-end', colors.eclipseEnd);
            element.style.setProperty('--color-loona-start', colors.loonaStart);
            element.style.setProperty('--color-loona-end', colors.loonaEnd);
            element.style.setProperty('--color-slash-start', colors.slashStart);
            element.style.setProperty('--color-slash-end', colors.slashEnd);
        });
    }, 100);
}
