export const callback = (func: () => void) => () => {
  func();
};

export const stateENUM = {
  off: 0,
  add: 1,
  drive: 2,
};

export const placeHolderText: Record<number, string> = {
  1: 'Image URL',
  2: 'Drive Id',
};
