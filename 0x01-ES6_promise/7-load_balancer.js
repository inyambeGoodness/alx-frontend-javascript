<<<<<<< HEAD
/* eslint-disable */
=======
>>>>>>> alx-frontend-javascript/main
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
