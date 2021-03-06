import { ColorPalette } from './color-palette';
import { Direction } from './direction';
import { DOM } from './dom';
import { THEMES } from './themes';

export interface Theme {
    readonly id: string;
    readonly name: string;
    readonly ot12Colors: boolean;
    readonly ot12Reverse: boolean;
    readonly eclipseDirection: Direction;
    readonly colors: ColorPalette;
}

export function applyTheme(dom: DOM): void {
    let themeId = dom.themeElement.value;
    let theme = THEMES.find(theme => theme.id === themeId) ?? THEMES[0];

    dom.directionLtrElement.checked = theme.eclipseDirection === 'ltr';
    dom.directionRtlElement.checked = theme.eclipseDirection === 'rtl';
    dom.ot12ColorElement.checked = theme.ot12Colors;
    dom.ot12ReverseElement.checked = theme.ot12Reverse;
    dom.eclipseStartColorElement.value = theme.colors.eclipseStart;
    dom.eclipseEndColorElement.value = theme.colors.eclipseEnd;
    dom.backgroundStartColorElement.value = theme.colors.backgroundStart;
    dom.backgroundEndColorElement.value = theme.colors.backgroundEnd;
    dom.loonaStartColorElement.value = theme.colors.loonaStart;
    dom.loonaEndColorElement.value = theme.colors.loonaEnd;
    dom.slashStartColorElement.value = theme.colors.slashStart;
    dom.slashEndColorElement.value = theme.colors.slashEnd;
}
