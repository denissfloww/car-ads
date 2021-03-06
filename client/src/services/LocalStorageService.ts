interface User {
  id: string;
  username: string;
  token: string;
}

const saveUser = (user: User) => {
  localStorage.setItem('user', JSON.stringify(user));
};

const getUser = () => {
  const user = localStorage.getItem('user');
  if (user) {
    return JSON.parse(user);
  }

  return null;
};

const removeUser = () => localStorage.removeItem('user');

const LocalStorageService = { saveUser, getUser, removeUser };

export default LocalStorageService;
