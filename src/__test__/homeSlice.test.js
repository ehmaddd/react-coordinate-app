import provinceReducer from '../Redux/home/homeSlice';

describe('initial state', () => {
  it('Should return the default state of homeReducer', () => {
    const newState = provinceReducer(undefined, {});
    expect(newState).toEqual(
      { provinces: [] },
    );
  });
});
