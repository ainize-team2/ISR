export const urlToImage = async (url: string) => {
  const response = await fetch('/predict/url', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      url,
    }),
  });
  if (response.status !== 200) {
    const data = await response.json();
    throw data.error;
  }
  const blob = await response.blob();
  return URL.createObjectURL(blob);
};

export const fileToImage = async (selectedFile: FileList) => {
  const formData = new FormData();
  formData.append('file', selectedFile[0]);

  const response = await fetch('/predict/file', {
    method: 'POST',
    body: formData,
  });
  if (response.status !== 200) {
    const data = await response.json();
    throw data.error;
  }
  const blob = await response.blob();
  return URL.createObjectURL(blob);
};
