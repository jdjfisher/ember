export function debounce(func: () => void, timeout = 100) {
  let timer: NodeJS.Timeout;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(func, timeout);
  };
}
