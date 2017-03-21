// Using callback
function getTempCallback (location, callback) {
  callback(undefined, 78);
  callback('City not found');
}

getTempCallback('Philadelphia', function (err, temp) {
  if (err) {
    console.log('error', err);
  } else {
    console.log('success', temp)
  }
});

// Using Promise
function getTempPromise (location) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(79);
      reject('City not found');
    }, 1000);
  });
}

getTempPromise('Depok').then(function (temp) {
  console.log('promise success', temp);
}, function (err) {
  console.log('promise error', err);
});

// Challenge Area
function addPromise(a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('This both are not numbers');
    }
  });
}

addPromise(7, 3).then(function (result) {
  console.log('success', result);
}, function (err) {
  console.log('error', err);
});

addPromise(7, 'r').then(function (result) {
  console.log('this should not show up');
}, function (err) {
  console.log('this should appear', err);
});
