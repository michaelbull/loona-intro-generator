import { currentColorPalette } from './color-palette';
import { DOM } from './dom';
import { eclipseDirection } from './eclipse-direction';
import { logoElements } from './logo';

export function animate(dom: DOM): void {
    let duration = dom.durationElement.value;
    let elements = logoElements();
    let direction = eclipseDirection(dom);
    let colors = currentColorPalette(dom);

    requestAnimationFrame(() => {
        elements.forEach(element => {
            let base = element.classList.item(0);
            element.classList.remove(`${base}--animating`);
            element.classList.remove(`${base}--ltr`);
            element.classList.remove(`${base}--rtl`);
        });
    });

    setTimeout(() => {
        elements.forEach(element => {
            let base = element.classList.item(0);

            element.style.animationDuration = duration;
            element.classList.add(`${base}--animating`);
            element.classList.add(`${base}--${direction}`);
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
