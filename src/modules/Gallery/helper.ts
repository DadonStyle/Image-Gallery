export const formatUrl = (url: string) => {
  const id = getGoogleDriveId(url);
  return `https://drive.google.com/uc?export=view&id=${id}`;
};

// leaving the function declaration to utilize hoisting
function getGoogleDriveId(url: string): string | null {
  const match = url.match(/[-\w]{25,}/);
  return match ? match[0] : null;
}
