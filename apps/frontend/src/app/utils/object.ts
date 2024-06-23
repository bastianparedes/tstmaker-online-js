const keys = <Obj extends Record<string, unknown>>(object: Obj): (keyof Obj)[] => {
  return Object.keys(object);
};

const keysAndValues = <Obj extends Record<string, unknown>>(object: Obj) => {
  const objectkeys = keys(object);
  return objectkeys.map((key) => [key, object[key]]);
};

export { keys, keysAndValues };
