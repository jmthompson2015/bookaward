// see https://dev.to/ycmjason/javascript-fetch-retry-upon-failure-3p6g

const FetchUtilities = {};

FetchUtilities.fetchRetry = (url, options, n) =>
  fetch(url, options).catch(error => {
    if (n === 1) throw error;
    return FetchUtilities.fetchRetry(url, options, n - 1);
  });

export default FetchUtilities;
