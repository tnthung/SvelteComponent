import { normalizeClass } from "./normalizeClass.js";
import { normalizeStyle } from "./normalizeStyle.js";


export function stylable(
  props       : Record<string, any>,
  name        : string,
  defaultClass: string,
  defaultStyle: string
): Record<"class" | "style", string> {
  const classKey =  ["class", ...(name === "" ? [] : [name])].join("-");
  const styleKey =  ["style", ...(name === "" ? [] : [name])].join("-");

  return {
    class: normalizeClass(props[classKey] ?? `${props[classKey+"-extra"] ?? ""} ${defaultClass}`).trim(),
    style: normalizeStyle(props[styleKey] ?? `${props[styleKey+"-extra"] ?? ""} ${defaultStyle}`).trim(),
  };
}
