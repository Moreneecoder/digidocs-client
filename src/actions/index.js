const REFRESH_TABLE = 'REFRESH_TABLE';
const FILTER_TABLE = 'FILTER_TABLE';
const SIGNED_UP = 'SIGNED_UP';

const refreshTable = (table) => ({
  type: REFRESH_TABLE,
  latestTable: table,
});

const filterTable = (filter) => ({
  type: FILTER_TABLE,
  filter,
});

const signedUp = (loggedIn) => ({
  type: SIGNED_UP,
  loggedIn,
});

export { refreshTable, filterTable, signedUp };
