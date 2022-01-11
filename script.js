'use strict';

document.querySelector('.item').addEventListener('click', function (e) {
  console.log(
    '* NAV ITEM *',
    'target: ',
    e.target,
    'currentTarget: ',
    e.currentTarget
  );
  console.log('e.currentTarget === this', e.currentTarget === this);
});

document.querySelector('.container').addEventListener('click', function (e) {
  console.log(
    '* CONTAINER *',
    'target: ',
    e.target,
    'currentTarget: ',
    e.currentTarget
  );
});

document.querySelector('.nav').addEventListener('click', function (e) {
  console.log('* NAV *', 'target: ', e.target, 'currentTarget: ', e.currentTarget);
});
