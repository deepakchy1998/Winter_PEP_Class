// 1. Debounce Function: Implement a debounce function that limits the frequency of a function's execution when called repeatedly within a specified time frame. This is useful in scenarios like resizing or scrolling events.

function debounce(func, delay) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
}

function handleInput(event) {
  // Do something with the input value
  console.log(event.target.value);
}

const debouncedHandleInput = debounce(handleInput, 300); // 300ms delay

inputElement.addEventListener('input', debouncedHandleInput);
