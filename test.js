function log() {
  console.log("xxx");
}

const debounce = (callback, wait) => {
  wait = wait || 0;
  let timeOut;

  return () => {
    if (timeOut) clearTimeout(timeOut);
    timeOut = setTimeout(callback, wait);
  };
};

const debounceLog = debounce(log, 500);
debounceLog();
debounceLog();
debounceLog();
debounceLog();
