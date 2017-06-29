try {
  const array = [
    'localStorage',
    'sessionStorage',
    'indexedDB',
    'self',
    'global',
    'window'
  ];

  for (const value of array) {
    console.log(key in window, window[key]);
    document.write(window[key] + ' <br>');
  }
} catch (e) {
  console.log('Error is occured ' + e.message);
} finally {
  console.log('END');
}
