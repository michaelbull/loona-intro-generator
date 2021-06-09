import { svgElements } from '../svg-elements';
import { currentColorPalette } from './color-palette';
import { DOM } from './dom';

const LOGO_ELEMENT_CLASSNAMES = [
    'yyxy',
    'yyxy__formula',
    'yyxy__skeleton',
    'yyxy__branches',
    'yyxy__branch',
    'yyxy__bonds',
    'yyxy__bond',
    'yyxy__atoms',
    'yyxy__atom',
    'yyxy__name',
    'yyxy__logo',
    'yyxy__glyph'
];

export function animate(dom: DOM): void {
    let duration = dom.durationElement.value;
    let elements = svgElements(LOGO_ELEMENT_CLASSNAMES);
    let colors = currentColorPalette(dom);

    requestAnimationFrame(() => {
        elements.forEach(element => {
            let base = element.classList.item(0);
            element.classList.remove(`${base}--animating`);
        });
    });

    setTimeout(() => {
        elements.forEach(element => {
            let base = element.classList.item(0);

            element.style.animationDuration = duration;
            element.classList.add(`${base}--animating`);
            element.style.setProperty('--width-branch', colors.branchWidth);
            element.style.setProperty('--width-bond', colors.bondWidth);
            element.style.setProperty('--color-background', colors.background);
            element.style.setProperty('--color-atoms', colors.atoms);
            element.style.setProperty('--color-bonds', colors.bonds);
            element.style.setProperty('--color-branches', colors.branches);
            element.style.setProperty('--color-name', colors.name);
            element.style.setProperty('--color-logo', colors.logo);
        });
    }, 100);
}
