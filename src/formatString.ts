export function xxFormat(
  input: string,
  mask: string,
  options: {
    fillMissing?: boolean;
    fillChar?: string;
  } = {}
): string {
  const { fillMissing = false, fillChar = 'X' } = options;
  let output = '';
  let inputIndex = 0;

  for (let i = 0; i < mask.length; i++) {
    const maskChar = mask[i];

    if (maskChar === 'X') {
      const char = input[inputIndex];
      if (char) {
        output += char;
        inputIndex++;
      } else {
        output += fillMissing ? fillChar : '';
      }
    } else {
      output += maskChar;
    }
  }

  return output;
}
