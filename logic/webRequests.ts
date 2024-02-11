async function makeRequest(webhook: string, formData: FormData) {
  await fetch(webhook, {
    method: 'POST',
    body: formData,
  });
}

export async function multiRequest(webhook: string, formDataArray: FormData[]) {
  try {
    // Create an array of fetch Promises
    const fetchPromises = formDataArray.map((formData) => makeRequest(webhook, formData));

    // Use Promise.all to wait for all fetches to complete
    await Promise.all(fetchPromises);
  } catch (error) {
    console.error('An error occurred:', error);
    throw new Error(error);
  }
}
