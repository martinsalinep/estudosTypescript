type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  // nos parametros precisa de um objeto que cumpra os requisitos, mas pode ter mais propriedades
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'joao', password: '123456' };
const sentUser = { username: 'joa321', password: '123456' };
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
