

export function normalizeStyle(src: string) {
  return src
    .replaceAll(/\s*\/\/.*/g, "")   // remove comments
    .replaceAll("\n", "")           // remove newlines
    .replaceAll(/;\s*/g, "; ")      // remove spaces after semicolons
    .trim()                         // remove leading and trailing whitespace
}
