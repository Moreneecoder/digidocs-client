import userReducer from '../reducers/userReducer';
import doctorsReducer from '../reducers/doctorsReducer';
import doctorReducer from '../reducers/doctorReducer';

const state = null;

const userPayload = [
  {
    role: 'users',
    data: {
      created_at: '2021-12-19T13:16:53.469Z',
      email: 'ajide@example.com',
      id: 23,
      is_doctor: false,
      name: 'Ajide',
      office_address: null,
      phone: '+2347081520327',
      updated_at: '2021-12-19T13:16:53.469Z',
    },
  },
];

const doctorsPayload = [
  {
    id: 5,
    name: 'Doctor Bone',
    phone: '+2347081520327',
    email: 'doctor@bone.com',
    created_at: '2021-12-09T20:39:39.945Z',
    updated_at: '2021-12-09T20:39:39.945Z',
    office_address: '11, Iyanu Oluwa Street, Pakuro, Mowe, Ogun State',
    is_doctor: true,
  },
  {
    id: 6,
    name: 'Doctor Who',
    phone: '+2347081520327',
    email: 'doctor@who.com',
    created_at: '2021-12-09T20:45:04.258Z',
    updated_at: '2021-12-09T20:45:04.258Z',
    office_address: '11, Iyanu Oluwa Street, Pakuro, Mowe, Ogun State',
    is_doctor: true,
  },
];

const action = {
  type: 'AUTH_SUCCESS',
  loggedIn: userPayload,
};

describe('Reducers Tests', () => {
  describe('userReducer Tests', () => {
    test('returns the correct updated state', () => {
      expect(userReducer(state, action)).toEqual(userPayload);
    });

    test('returns null state when wrong action type is passed', () => {
      action.type = 'SOMETHING_ELSE';
      expect(userReducer(state, action)).toEqual(null);
    });
  });

  describe('doctorsReducer Tests', () => {
    const action = {
      type: 'LOAD_DOCTORS',
      doctors: doctorsPayload,
    };

    test('returns the correct list of doctors as state', () => {
      expect(doctorsReducer(state, action)).toEqual(doctorsPayload);
    });

    test('must have is_doctor key set to true', () => {
        expect(doctorsReducer(state, action)[0].is_doctor).toBeTruthy();
      });

    test('must have an office address', () => {
      expect(doctorsReducer(state, action)[0].office_address).not.toBeNull();
    });

    test('returns null state when wrong action type is passed', () => {
      action.type = 'SOMETHING_ELSE';
      expect(doctorsReducer(state, action)).toEqual(null);
    });
  });

    describe('doctorReducer Tests', () => {
    const action = {
      type: 'LOAD_DOCTOR',
      doctor: doctorsPayload[0],
    };

    test('returns the correct list of doctors as state', () => {
      expect(doctorReducer(state, action)).toEqual(doctorsPayload[0]);
    });

    test('must have is_doctor key set to true', () => {
        expect(doctorReducer(state, action).is_doctor).toBeTruthy();
      });

    test('must have an office address', () => {
      expect(doctorReducer(state, action).office_address).not.toBeNull();
    });

    test('returns null state when wrong action type is passed', () => {
      action.type = 'SOMETHING_ELSE';
      expect(doctorReducer(state, action)).toEqual(null);
    });
  });
});
