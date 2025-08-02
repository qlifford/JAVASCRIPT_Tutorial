const fu = new Promise ((reject) => {
  let err;
  if (err){
    console.log('error')
    reject()
  }
  console.log('Executing...')

});
fu.then((res) => {
  console.log(res)
  .catch(() => {
    console.log()
  })

});
console.log(fu)
