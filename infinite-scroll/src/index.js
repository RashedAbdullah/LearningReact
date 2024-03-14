const observer = new IntersectionObserver((items) => {
  console.log(items);
  // When tracked element come into the view this is the callback function for anything.
});

observer.observe(/* actual item who i need to ovsrve */);
