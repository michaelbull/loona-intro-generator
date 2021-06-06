import { DOM } from './dom';

export const DEFAULT_BACKGROUND_COLOR = '#FFFFFF';
export const DEFAULT_ECLIPSE_COLOR = '#FFCA14';
export const DEFAULT_LOONA_COLOR = '#000000';
export const DEFAULT_SLASH_COLOR = '#BC1862';

export interface ColorPalette {
    readonly backgroundStart: string;
    readonly backgroundEnd: string;
    readonly eclipseStart: string;
    readonly eclipseEnd: string;
    readonly loonaStart: string;
    readonly loonaEnd: string;
    readonly slashStart: string;
    readonly slashEnd: string;
}

export function defaultColorPalette(): ColorPalette {
    return {
        backgroundStart: DEFAULT_BACKGROUND_COLOR,
        backgroundEnd: DEFAULT_BACKGROUND_COLOR,
        eclipseStart: DEFAULT_ECLIPSE_COLOR,
        eclipseEnd: DEFAULT_ECLIPSE_COLOR,
        loonaStart: DEFAULT_LOONA_COLOR,
        loonaEnd: DEFAULT_LOONA_COLOR,
        slashStart: DEFAULT_SLASH_COLOR,
        slashEnd: DEFAULT_SLASH_COLOR
    };
}

export function currentColorPalette(dom: DOM): ColorPalette {
    return {
        backgroundStart: dom.backgroundStartColorElement.value,
        backgroundEnd: dom.backgroundEndColorElement.value,
        eclipseStart: dom.eclipseStartColorElement.value,
        eclipseEnd: dom.eclipseEndColorElement.value,
        loonaStart: dom.loonaStartColorElement.value,
        loonaEnd: dom.loonaEndColorElement.value,
        slashStart: dom.slashStartColorElement.value,
        slashEnd: dom.slashEndColorElement.value
    };
}
