export async function uploadImageAsync(uri) {
  let apiUrl = "https://file-upload-example-backend-dkhqoilqqn.now.sh/upload";

  // Note:
  // Uncomment this if you want to experiment with local server
  //
  // if (Constants.isDevice) {
  //   apiUrl = `https://your-ngrok-subdomain.ngrok.io/upload`;
  // } else {
  //   apiUrl = `http://localhost:3000/upload`
  // } let uriParts = uri.split(".");
  let fileType = uriParts[uriParts.length - 1];

  let formData = new FormData();
  formData.append("photo", {
    uri,
    name: `photo.${fileType}`,
    type: `image/${fileType}`,
  });

  let options = {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
  };

  return fetch(apiUrl, options);
}
