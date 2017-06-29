try {
  if ('localStorage' in window) {
    console.info('localStorage exists', 'setItem' in window.localStorage);
  } else {
    console.error('localStorage is not found');
  }
  localStorage.setItem('hogehoge', 'fugafuga');
} catch (e) {
  console.log('Error is occured');
} finally {
  console.log('END');
}
