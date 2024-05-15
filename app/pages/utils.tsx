
export interface CallSection {
  index? : string,
  url: string;
}

export const HttpMethod = {
    GET: 'GET',
    POST: 'POST',
    HEAD: 'HEAD',
    DELETE: 'DELETE',
    PUT:'PUT',
    PATCH: 'PATCH',
    OPTIONS: 'OPTIONS',
  };



// const BASE_URL = {
//   SAME_ORIGIN: "http://localhost:3000",
//   REMOTE_ORIGIN: "http://localhost:7080"
// }

// export const ORIGIN = {
//   ALL: '*',
//   MY_ORIGIN: 'http://localhost:3000',
//   OTHER: 'https://other-website.com',
//   WRONG_PROTOCOL: 'https://localhost:3000',
//   WRONG_PORT: 'http://localhost:7404',
//   SUBDOMAIN: 'http://localhost:3000', // useless in localhost
//   DEFAULT_PORT: 'https://localhost:3000',
// };

export const ORIGIN = {
  ALL: '*',
  MY_ORIGIN: 'https://cors-training-website.vercel.app',
  OTHER: 'https://other-website.com',
  WRONG_PROTOCOL: 'http://cors-training-website.vercel.app',
  WRONG_PORT: 'http://cors-training-website.vercel.app:7404',
  SUBDOMAIN: 'https://vercel.app',
  DEFAULT_PORT: 'https://cors-training-website.vercel.app:443',
};

const BASE_URL = {
  SAME_ORIGIN: "https://cors-training-website.vercel.app",
  REMOTE_ORIGIN: "https://cors-training-api.vercel.app"
}

export const URL = {
  SAME_ORIGIN: BASE_URL.SAME_ORIGIN + '/api/data',
  REMOTE_VALID_ALL_ORIGIN: BASE_URL.REMOTE_ORIGIN + '/api/data1',
  REMOTE_VALID_CUSTOM_HEADER: BASE_URL.REMOTE_ORIGIN + '/api/data2',
  REMOTE_VALID_MY_ORIGIN: BASE_URL.REMOTE_ORIGIN + '/api/data3',
  REMOTE_PUT_METHOD: BASE_URL.REMOTE_ORIGIN + '/api/data4',
  REMOTE_NOBODY_ORIGIN: BASE_URL.REMOTE_ORIGIN + '/api/data5',
  REMOTE_WRONG_PROTOCOL: BASE_URL.REMOTE_ORIGIN + '/api/data6',
  REMOTE_WRONG_PORT: BASE_URL.REMOTE_ORIGIN + '/api/data7',
  REMOTE_SUBDOMAIN: BASE_URL.REMOTE_ORIGIN + '/api/data8',
  REMOTE_DEFAULT_PORT: BASE_URL.REMOTE_ORIGIN + '/api/data9',
};