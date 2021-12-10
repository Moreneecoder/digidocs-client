const REFRESH_TABLE = 'REFRESH_TABLE';
const FILTER_TABLE = 'FILTER_TABLE';
const AUTH_SUCCESS = 'AUTH_SUCCESS';
const LOGOUT = 'LOGOUT';

const refreshTable = (table) => ({
  type: REFRESH_TABLE,
  latestTable: table,
});

const filterTable = (filter) => ({
  type: FILTER_TABLE,
  filter,
});

const authSuccess = (loggedIn) => ({
  type: AUTH_SUCCESS,
  loggedIn,
});

const loggedOut = (loggedOut) => ({
  type: LOGOUT,
  loggedOut,
});

export {
  refreshTable, filterTable, authSuccess, loggedOut,
};
