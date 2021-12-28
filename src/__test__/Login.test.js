import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Login from '../containers/Login';

describe('Login Component', () => {
  const initialState = [];
  const mockStore = configureStore();
  let store;

  test('Renders Login component as expected', () => {
    store = mockStore(initialState);
    const tree = renderer.create(
      <BrowserRouter>
        <Provider store={store}><Login /></Provider>
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
