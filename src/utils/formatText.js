export const formatText = (e) => {
  return e
    .replace(/&#039;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&rdquo;/g, "`")
    .replace(/&ldquo;/g, '"')
    .replace(/&euml;/g, "ë")
    .replace(/&iacute;/g, "í")
    .replace(/&oacute;/g, "ó")
    .replace(/&amp;/g, "&")
    .replace(/&aring;/g, "å")
    .replace(/&eacute;/g, "é")
    .replace(/&aacute;/g, "á")
    .replace(/&Aacute;/g, "Á")
    .replace(/&ouml;/g, "ö")
    .replace(/&ntilde;/g, "ñ")
    .replace(/&rsquo;/g, "‘")
    .replace(/&prime;/g, '"')
    .replace(/&Prime;/g, '"')
    .replace(/&shy;/g, "-");
};
