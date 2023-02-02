/* eslint-disable @typescript-eslint/no-explicit-any */

export function success(value: any) {
  return {
    value,
    isSuccess() {
      return true;
    },
    isError() {
      return false;
    },
  };
}

export function error(value: any) {
  return {
    value,
    isSuccess() {
      return false;
    },
    isError() {
      return true;
    },
  };
}
