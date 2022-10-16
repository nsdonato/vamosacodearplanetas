interface ParamsProps {
  characteristicName: string;
}

export const isValidPathCharacteristic = (path: ParamsProps): boolean => {
  const listCharacteristics = [
    "overview",
    "internal-structure",
    "surface-geology",
  ];
  if (path) {
    return Object.values(listCharacteristics).includes(
      path?.characteristicName
    );
  }
  return true;
};
