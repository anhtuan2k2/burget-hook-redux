// import { useState, useEffect } from 'react';

// export default (httpClient) => {
//   const [error, setError] = useState(null);

//   const reqInterceptor = httpClient.interceptors.request.use((req) => {
//     setError(null);
//     return req;
//   });
//   const resInterceptor = httpClient.interceptors.response.use(
//     (res) => res,
//     (err) => {
//       setError(err);
//     }
//   );
//   useEffect(() => {
//     return () => {
//       httpClient.interceptors.request.eject(reqInterceptor);
//       httpClient.interceptors.response.eject(resInterceptor);
//     };
//   }, [resInterceptor, reqInterceptor]); //! useEffect will run when 2 parameter resInterceptor ,req change

//   const errorConfirmedHandler = () => {
//     setError(null);
//     };
//     return [error, errorConfirmedHandler];
// };
