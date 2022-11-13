interface ParamsProps {
  characteristicName: string;
}

export const isValidPathCharacteristic = (path: ParamsProps): boolean => {
  const listCharacteristics = [
    "overview",
    "internal-structure",
    "surface-geology",
  ];

  return path
    ? Object.values(listCharacteristics).includes(path?.characteristicName)
    : true;
};
