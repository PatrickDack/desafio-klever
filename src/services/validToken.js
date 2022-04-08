const validToken = (list, newToken) => list.some(({token}) => token == newToken.token);

export default validToken;
