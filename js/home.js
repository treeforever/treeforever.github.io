// animate stroke formation
anime({
  targets: '#M path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 3000,
  // direction: 'alternate',
});

// animate stroke color
anime({
  targets: '#M > g',
  stroke: ['#33E7C4', '#FFFC16', '#EC8CDD'],
  easing: 'easeInOutSine',
  duration: 5000,
});

console.log('anime', anime());
