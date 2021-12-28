import doctorsReducer from '../../reducers/doctorsReducer';

const state = null;

const doctorsPayload = [
  {
    id: 5,
    name: 'Doctor Bone',
    phone: '+2341234567890',
    email: 'doctor@bone.com',
    created_at: '2021-12-09T20:39:39.945Z',
    updated_at: '2021-12-09T20:39:39.945Z',
    office_address: '11, Iyanu Oluwa Street, Pakuro, Mowe, Ogun State',
    is_doctor: true,
  },
  {
    id: 6,
    name: 'Doctor Who',
    phone: '+2341234509876',
    email: 'doctor@who.com',
    created_at: '2021-12-09T20:45:04.258Z',
    updated_at: '2021-12-09T20:45:04.258Z',
    office_address: '11, Iyanu Oluwa Street, Pakuro, Mowe, Ogun State',
    is_doctor: true,
  },
];

const action = {
  type: 'LOAD_DOCTORS',
  doctors: doctorsPayload,
};

describe('doctorsReducer Tests', () => {
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
