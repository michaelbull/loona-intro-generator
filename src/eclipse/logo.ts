const LOGO_ELEMENT_CLASSNAMES = [
    'logo',
    'logo__l',
    'logo__o1',
    'logo__o2',
    'logo__n',
    'logo__a',
    'logo__slash',
    'logo__circle',
    'logo__crescent',
    'logo__glyphs'
];

export function logoElements(): SVGElement[] {
    return LOGO_ELEMENT_CLASSNAMES
        .flatMap(className => Array.from(document.getElementsByClassName(className)))
        .filter((element): element is SVGElement => element instanceof SVGElement);
}
