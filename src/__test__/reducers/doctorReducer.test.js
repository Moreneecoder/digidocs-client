import doctorReducer from '../../reducers/doctorReducer';

const state = null;

const doctorPayload = {
  id: 5,
  name: 'Doctor Bone',
  phone: '+2341234567890',
  email: 'doctor@bone.com',
  created_at: '2021-12-09T20:39:39.945Z',
  updated_at: '2021-12-09T20:39:39.945Z',
  office_address: '11, Iyanu Oluwa Street, Pakuro, Mowe, Ogun State',
  is_doctor: true,
};

describe('doctorReducer Tests', () => {
  const action = {
    type: 'LOAD_DOCTOR',
    doctor: doctorPayload,
  };

  test('returns the correct list of doctors as state', () => {
    expect(doctorReducer(state, action)).toEqual(doctorPayload);
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
