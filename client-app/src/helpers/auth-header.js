function authHeader(){

  const user = localStorage.getItem('user');

  return user && user.token ? { 'Authintication': 'Bearer ' + user.token} : {}
}