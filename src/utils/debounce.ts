// eslint-disable-next-line @typescript-eslint/ban-types
const debounce = <T extends Function>(callback: T, delay: number): T => {
  let timerId: number;

  return ((...args: any) => {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      callback(...args);
    }, delay);
  }) as unknown as T;
};
export default debounce;
