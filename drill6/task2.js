function limitFunctionCallCount(cb, n) {
    // Should return a function that invokes `cb`.
    // The returned function should only allow `cb` to be invoked `n` times.
    // Returning null is acceptable if cb can't be returned
    let count = 0; 
    return function(...args) {
      if (count >= n) return null; 
      count++;
      return cb(...args); 
    };
  }
  
  const testCallback = (msg) => console.log("message");
  const limitedCallback = limitFunctionCallCount(testCallback, 3);
  
  limitedCallback();  
  limitedCallback(); 
  limitedCallback();  
  limitedCallback(); 
  

  