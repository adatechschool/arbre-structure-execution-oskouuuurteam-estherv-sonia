function job() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
          resolve('hello world');
          }, 2000); 
    });
}
module.exports = job;
job()
    .then(function(resolve) {
        console.log(resolve);
    })
    .catch(function(error) {
    console.log(error);
  });