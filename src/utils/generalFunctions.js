// exports.getDateInUTCWithoutHours = date => {
//   return new Date(
//     Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0),
//   );
// };

// exports.Capitalize = str => {
//   const splitStr = str.toLowerCase().split(' ');
//   for (let i = 0; i < splitStr.length; i++) {
//     splitStr[i] =
//       splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
//   }
//   return splitStr.join(' ');
// };

// exports.checkAvailability = (from, to) => {
//   if (from === '00:00' && to === '00:00') {
//     return false;
//   }

//   to = to.replace(':');
//   from = from.replace(':');
//   if (to <= from) {
//     return false;
//   }

//   return true;
// };

// exports.convertDateToString = date => {
//   date = `${date.getFullYear()}-${`0${date.getMonth() + 1}`.slice(
//     -2,
//   )}-${`0${date.getDate()}`.slice(-2)}`;
//   return date;
// };

// exports.convertDayToString = date => {
//   date = `${date.getFullYear()}-${`0${date.getMonth() + 1}`.slice(
//     -2,
//   )}-${`0${date.getDate()}`.slice(-2)}`;
//   return date;
// };

// exports.convertDateTimeToString = date => {
//   date = `${date.getFullYear()}-${`0${date.getMonth() + 1}`.slice(
//     -2,
//   )}-${`0${date.getDate()}`.slice(-2)} ${`0${date.getHours()}`.slice(
//     -2,
//   )}:${`0${date.getMinutes()}`.slice(-2)}`;
//   return date;
// };

// exports.checkAvailabilityWithJob = (from, to, jobFrom, jobTo) => {
//   // console.log('CHECK_AVAILABILITY',from,to)
//   // console.log('CHECK_JOB',jobFrom,jobTo)

//   if (from === '00:00' && to === '00:00') {
//     return false;
//   }
//   to = to.replace(':', '');
//   from = from.replace(':', '');
//   jobFrom = jobFrom.replace(':', '');
//   jobTo = jobTo.replace(':', '');
//   // if(to<=from){
//   //     return false;
//   // }
//   // // console.log('CHECK_AVAILABILITY',from,to)
//   // // console.log('CHECK_JOB',jobFrom,jobTo)
//   // return true;
//   if (jobFrom >= from && jobFrom <= to && jobTo <= to) {
//     return true;
//   }

//   return false;
// };

// exports.returnSuccess = success => {
//   const { message, data } = success;
//   console.log(message);
//   return {
//     status: 'Success',
//     message,
//     data,
//   };
// };

// exports.returnError = error => {
//   console.log(error);
//   return {
//     status: 'Failed',
//     error,
//   };
// };

// exports.createError = message => {
//   const error = new Error();
//   error.code = 'DB_OPERATION_FAILED';
//   error.message = message;
//   error.date = new Date();
//   return error;
// };

// exports.throwNewError = (message, code, next, error) => {
//   if (error) {
//     error.status = code;
//     next(error);
//   } else {
//     const error = new Error(message);
//     error.status = code;
//     error.message = message;
//     next(error);
//   }
// };

// exports.APIResponse = resData => {
//   const { res, status, code, message, data } = resData;
//   console.log('Response ::: ', message);
//   if (status === 'Success') {
//     return res.status(code).json({
//       status,
//       message,
//       data,
//     });
//   }
//   if (status === 'Failed') {
//     const { errorCode } = resData;
//     return res.status(code).json({
//       status,
//       error: {
//         code: errorCode || 'ERR_400',
//         message,
//       },
//     });
//   }
//   return res.status(code).json({
//     status: 'Unexpected_Response_Type',
//     error: {
//       code: 'UNEXPECTED_RESPONSE_TYPE',
//       message: 'Unexpected response from API!',
//     },
//   });
// };

// exports.throwNewError = (message, code, next, error) => {
//   if (error) {
//     error.status = code;
//     next(error);
//   } else {
//     const error = new Error(message);
//     error.status = code;
//     error.message = message;
//     next(error);
//   }
// };

// exports.returnSuccess = success => {
//   const { message, data } = success;
//   console.log(message);
//   return {
//     status: 'Success',
//     message,
//     data,
//   };
// };

// exports.returnError = error => {
//   console.log(error);
//   return {
//     status: 'Failed',
//     error,
//   };
// };

// exports.createError = message => {
//   const error = new Error();
//   error.code = 'DB_OPERATION_FAILED';
//   error.message = message;
//   error.date = new Date();
//   return error;
// };
