const throttle = <T extends Function>(callback: T, delay: number): T => {
  let flag = true;
  let lastArgs: any[] | null = null;

  return ((...args: any[]) => {
    if (flag) {
      flag = false;
      callback.apply(this, args);
      setTimeout(() => {
        flag = true;
        if (lastArgs !== null) {
          callback.apply(this, lastArgs);
          lastArgs = null;
        }
      }, delay);
    } else {
      lastArgs = args;
    }
  }) as unknown as T;
};

export default throttle;
