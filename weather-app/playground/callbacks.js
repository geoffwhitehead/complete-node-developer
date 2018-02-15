let getUser = (id, cb) => {
  let user = {
    id: id,
    name: 'test'
  }

  setTimeout(() => {
    cb(user);
  }, 3000)
}

getUser(123, (userObject) => {
  console.log(userObject);
})