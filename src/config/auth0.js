import { auth } from 'express-oauth2-jwt-bearer';


const jwtCheck = auth({
  audience: 'https://booky.hicoders.ch',
  issuerBaseURL: 'https://dev-18qfumc30xj5cayd.us.auth0.com/',
  tokenSigningAlg: 'RS256'
});

export default jwtCheck;