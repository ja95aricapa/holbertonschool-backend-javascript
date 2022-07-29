export default function getFullResponseFromAPI(success) {
  const thePromise = new Promise((resolve, reject) => {
    if (success === true) {
      let answer = {'status': 200, 'body': 'Success'};
      resolve(answer);
    }
    else {
      let answer = 'The fake API is not working currently'
      reject(answer);
    }
  });
  return thePromise;
}