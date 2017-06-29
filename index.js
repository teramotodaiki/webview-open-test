try {
  if ('localStorage' in window) {
    document.write('localStorage exists');
    console.info('setItem' in window.localStorage);
  } else {
    console.error('localStorage is not found');
  }
  localStorage.setItem('hogehoge', 'fugafuga');
} catch (e) {
  console.log('Error is occured');
} finally {
  console.log('END');
  document.write('END');
}
