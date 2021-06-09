export function svgElements(classnames: string[]): SVGElement[] {
    return classnames
        .flatMap(className => Array.from(document.getElementsByClassName(className)))
        .filter((element): element is SVGElement => element instanceof SVGElement);
}
