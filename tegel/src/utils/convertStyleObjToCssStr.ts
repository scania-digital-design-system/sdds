// Source (2022-11-29): https://github.com/Tbhesswebber/style-object-to-css-string
function createParser(matcher, replacer) {
  const regex = RegExp(matcher, 'g');
  return (string) => {
    // * throw an error if not a string
    if (typeof string !== 'string') {
      throw new TypeError(`expected an argument of type string, but got ${typeof string}`);
    }

    // * if no match between string and matcher
    if (!string.match(regex)) {
      return string;
    }

    // * executes the replacer function for each match
    // ? replacer can take any arguments valid for String.prototype.replace
    return string.replace(regex, replacer);
  };
}

const camelToKebab = createParser(/[A-Z]/, (match) => `-${match.toLowerCase()}`);

export default function convertStyleObjToCssStr(
  styleObj: { [key: string]: string },
  parser = camelToKebab,
) {
  if (!styleObj || typeof styleObj !== 'object' || Array.isArray(styleObj)) {
    throw new TypeError(`expected an argument of type object, but got ${typeof styleObj}`);
  }
  const lines = Object.keys(styleObj).map(
    (property) => `${parser(property)}: ${styleObj[property]};`,
  );
  return lines.join('\n');
}
