export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      return {status: 200, body: 'success'};
	})
	.catch(() => {
      return new Error();
	})
	.finally(() => {
      console.log("Got a rsponse from the API")
	});
}
