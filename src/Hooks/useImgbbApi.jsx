const useImgbbApi = () => {
  const imgbbHostingKey = import.meta.env.VITE_IMAGE_BB_KEY;
  const imgbbApi = `https://api.imgbb.com/1/upload?key=${imgbbHostingKey}`;

  return imgbbApi;
};

export default useImgbbApi;
