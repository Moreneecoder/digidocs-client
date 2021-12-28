import appointmentsReducer from '../../reducers/appointments';

const state = null;

const appointmentsPayload = [
  {
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
  },
  {
    appointment: {
      id: 2,
      user_id: 1,
      doctor_id: 8,
      title: 'sdfbg',
      description: 'efkrthpk',
      time: '2021-12-22T12:24:00.000Z',
      created_at: '2021-12-14T13:25:39.555Z',
      updated_at: '2021-12-14T13:25:39.555Z',
    },
    doctor: {
      id: 8,
      name: 'Doctor Wan',
      phone: '+2347081520327',
      email: 'wan@doctor.com',
      created_at: '2021-12-09T20:56:59.472Z',
      updated_at: '2021-12-09T20:56:59.472Z',
      office_address: '11, Iyanu Oluwa Street, Pakuro, Mowe, Ogun State',
      is_doctor: true,
    },
  },
];

describe('appointmentsReducer Tests', () => {
  const action = {
    type: 'LOAD_APPOINTMENTS',
    appointments: appointmentsPayload,
  };

  test('returns the correct list of appointments as state', () => {
    expect(appointmentsReducer(state, action)).toEqual(appointmentsPayload);
  });

  test('must have is_doctor key set to true', () => {
    expect(appointmentsReducer(state, action)[0].doctor.is_doctor).toBeTruthy();
  });

  test('must have an office address', () => {
    expect(appointmentsReducer(state, action)[0].doctor.office_address).not.toBeNull();
  });

  test('returns null state when wrong action type is passed', () => {
    action.type = 'SOMETHING_ELSE';
    expect(appointmentsReducer(state, action)).toEqual(null);
  });
});
