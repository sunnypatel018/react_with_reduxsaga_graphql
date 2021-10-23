export const REQUEST_API_DATA = 'REQUEST_API_DATA';
export const RECEIVE_API_DATA = 'RECEIVE_API_DATA';

export const requestData = (cityName) => ({
    type: REQUEST_API_DATA,
    cityName
});

export const receiveData = (data) => ({
    type: RECEIVE_API_DATA,
    data,
});
