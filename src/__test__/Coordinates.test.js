import configureStore from 'redux-mock-store';

const mockStore = configureStore();

describe('render', () => {
  const newState = {
    coordinates: { Latitutde: 23.43, Longitude: 43.48 },
    isLoading: false,
  };

  test('should store the correct state in the store', () => {
    const coordinatesStore = mockStore(newState);

    coordinatesStore.dispatch({ type: 'get/coordinates', payload: { provinces: newState } });

    expect(coordinatesStore.getState()).toEqual(newState);
  });
});
