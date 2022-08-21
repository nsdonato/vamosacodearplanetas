// En honor al pipe del mejor js framework
export const angularTitlePipe = (param: string): string => {
  let firstChar = param[0];
  firstChar = firstChar.toUpperCase();

  return `${firstChar}${param.substring(1)}`;
};
