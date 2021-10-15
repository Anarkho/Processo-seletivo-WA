export const formatText = (e) => {
  return e
    .replace(/&#039;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&rdquo;/g, "`")
    .replace(/&ldquo;/g, '"')
    .replace(/&euml;/g, "ë")
    .replace(/&iacute;/g, "í")
    .replace(/&oacute;/g, "ó")
    .replace(/&shy;/g, "-");
};

