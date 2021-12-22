import appointmentReducer from '../../reducers/appointment';

const state = null;

const appointmentPayload = {
  appointment: {
    id: 1,
    user_id: 1,
    doctor_id: 5,
    title: 'Injection',
    description: 'Something sharp',
    time: '2022-05-02T19:18:58.509Z',
    created_at: '2021-12-10T22:27:08.118Z',
    updated_at: '2021-12-10T22:27:08.118Z',
  },
  doctor: {
    id: 5,
    name: 'Doctor Bone',
    phone: '+2347081520327',
    email: 'doctor@bone.com',
    created_at: '2021-12-09T20:39:39.945Z',
    updated_at: '2021-12-09T20:39:39.945Z',
    office_address: '11, Iyanu Oluwa Street, Pakuro, Mowe, Ogun State',
    is_doctor: true,
  },
};

describe('appointmentReducer Tests', () => {
  const action = {
    type: 'LOAD_APPOINTMENT',
    appointment: appointmentPayload,
  };

  test('returns the correct list of appointments as state', () => {
    expect(appointmentReducer(state, action)).toEqual(appointmentPayload);
  });

  test('must have is_doctor key set to true', () => {
    expect(appointmentReducer(state, action).doctor.is_doctor).toBeTruthy();
  });

  test('must have an office address', () => {
    expect(appointmentReducer(state, action).doctor.office_address).not.toBeNull();
  });

  test('returns null state when wrong action type is passed', () => {
    action.type = 'SOMETHING_ELSE';
    expect(appointmentReducer(state, action)).toEqual(null);
  });
});
