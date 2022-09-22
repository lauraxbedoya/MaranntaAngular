export const AUTH_TOKEN = 'auth-token';

const storage = {
  save: (key: string, value: string, session?: boolean) => {
    !session ? localStorage.setItem(key, value) : sessionStorage.setItem(key, value);
  },
  get: (key: string, session?: boolean) => {
    const res = !session ? localStorage.getItem(key) : sessionStorage.getItem(key);
    return res;
  },
  getAsync: async (key: string, session?: boolean) => {
    return !session ? localStorage.getItem(key) : sessionStorage.getItem(key);
  },
  remove: (key: string, session?: boolean) => {
    !session ? localStorage.removeItem(key) : sessionStorage.removeItem(key);
  },
  clear: (session?: boolean) => {
    !session ? localStorage.clear() : sessionStorage.clear();
    localStorage.clear();
  },
};

export default storage;