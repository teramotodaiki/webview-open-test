try {
  if ('localStorage' in window) {
    document.write('localStorage ');
    console.info('setItem' in window.localStorage);
  } else {
    console.error('localStorage is not found');
  }
  if ('sessionStorage' in window) {
    document.write('sessionStorage');
  }
  if ('indexedDB' in window) {
    document.write('indexedDB ');
  }

  localStorage.setItem('hogehoge', 'fugafuga');
} catch (e) {
  console.log('Error is occured', e.message);
} finally {
  console.log('END');
  document.write('END');
}
