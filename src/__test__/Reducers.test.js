import userReducer from '../reducers/userReducer';
const state = null;

const userPayload = [
    {
      role: 'users',
      data: {
        created_at: "2021-12-19T13:16:53.469Z",
        email: "ajide@example.com",
        id: 23,
        is_doctor: false,
        name: "Ajide",
        office_address: null,
        phone: "+2347081520327",
        updated_at: "2021-12-19T13:16:53.469Z",
      },
    },
  ];

const action = {
  type: 'AUTH_SUCCESS',
  loggedIn: userPayload,
};

describe('Reducers Tests', () => {
  test('returns the correct updated state', () => {
    expect(userReducer(state, action)).toEqual(userPayload);
  });

  test('returns null state when wrong action type is passed', () => {
    action.type = 'SOMETHING_ELSE';
    expect(userReducer(state, action)).toEqual(null);
  });
});