/**
 * enum itility function to transform string array into object with props
 * @param strArray the string array to be transformed
 * @returns the new object with props that works as enum
 */
export function strEnum<T extends string>(strArray: Array<T>): { [K in T]: K } {
  return strArray.reduce((res, key) => {
    res[key] = key;
    return res;
  }, Object.create(null));
}
