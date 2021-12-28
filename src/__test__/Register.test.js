import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Register from '../containers/Register';

describe('Register Component', () => {
  const initialState = [];
  const mockStore = configureStore();
  let store;

  test('Renders Register component as expected', () => {
    store = mockStore(initialState);
    const tree = renderer.create(
      <BrowserRouter>
        <Provider store={store}><Register /></Provider>
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
