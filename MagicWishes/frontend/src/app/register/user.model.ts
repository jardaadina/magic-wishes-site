export interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
}

export function validNewUser(user: User): boolean {
  if (!user.name || !user.email || !user.password) {
    return false;
  }

  //verify name
  if (user.name.length < 2) {
    return false;
  }

  //verify email
  if (!validateEmail(user.email)) {
    return false;
  }

  //verify password
  if (user.password.length < 4) {
    return false;
  }

  return true;
}

function validateEmail(email: string) {
  return email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
