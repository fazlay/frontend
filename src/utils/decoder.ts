import jwt from 'jsonwebtoken';

export const decoderFunction = (accessToken: string) => {
    const decoded = jwt.decode(accessToken);
    return decoded;
};

// export const decoderFunction = (accesssToken: string) => {
//     const de = require('jsonwebtoken');
//     const deDone = de.decode(accesssToken);
//     return deDone;
// };
