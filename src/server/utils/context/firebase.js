/**
 * Provide helpers to save token on client
 *
 *  @example
 *        const api = new APi(getToken);
 *        const firebase = new FireBase(getToken, setToken);
 **/

const getToken = node => () => node.context().flow.get('firebase-token');
const setToken = node => token => node.context().flow.set('firebase-token', token);

module.exports = { getToken, setToken };