import { fetchUtils } from 'react-admin';

const authProvider = {
    // called when the user attempts to log in
    login: async ({ username, password }) => {
        // Check the username and password against the API
        const request = new Request('https://jsonplaceholder.typicode.com/users', {
            method: 'GET',
        });
        const response = await fetchUtils.fetchJson(request);
        const users = response.json;

        const user = users.find(user => user.username === username);
        if (user) {
            localStorage.setItem('username', username);
            return Promise.resolve();
        } else {
            return Promise.reject('Invalid username or password');
        }
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem('username');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem('username') ? Promise.resolve() : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
};

export default authProvider;
