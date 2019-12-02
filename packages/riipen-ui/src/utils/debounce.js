/**
 * Calls a function after a wait time
 * prevents other calls to the same function during that time
 *
 * @param {function} func - function to wait after timeout
 * @param {number} wait - Time to wait before call
 * @param {function} immediate - Wether to call the function immediatly
 */
export default function debounce(func, wait = 200, immediate = false) {
  let timeout;

  return function executedFunction(...args) {
    const context = this;

    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}
