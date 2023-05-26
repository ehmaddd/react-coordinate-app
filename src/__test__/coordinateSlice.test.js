import coordinateReducer from '../Redux/coordinate/coordinateSlice';

it('Should return the default state of coordinateReducer', () => {
  const newState = coordinateReducer(undefined, {});
  expect(newState).toEqual({
    cities: [],
  });
});
