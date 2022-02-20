export const getInstalledSdks = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_SERVER}/installed`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getUnInstalledSdks = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_SERVER}/uninstalled`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
