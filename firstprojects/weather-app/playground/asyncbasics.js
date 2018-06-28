console.log('Starting app');

setTimeout(() => {
  console.log('Inside of TO callback');
}, 2000);

setTimeout(() => {
  console.log('Second TO');
});

console.log('Fishing app');
