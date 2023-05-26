import configureStore from 'redux-mock-store';

const mockStore = configureStore();

describe('render', () => {
  const newState = {
    province: ['Punjab', 'Sindh'],
    isLoading: false,
  };

  it('should store the correct state in the store', () => {
    const provinceStore = mockStore(newState);

    provinceStore.dispatch({ type: 'get/provinces', payload: { provinces: newState } });

    expect(provinceStore.getState()).toEqual(newState);
  });
});
