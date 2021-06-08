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

export function logoElements(): SVGElement[] {
    return LOGO_ELEMENT_CLASSNAMES
        .flatMap(className => Array.from(document.getElementsByClassName(className)))
        .filter((element): element is SVGElement => element instanceof SVGElement);
}
