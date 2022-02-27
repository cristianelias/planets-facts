import { useEffect, useState } from "react";

const useImage = (fileName) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      let isMounted = true;

      try {
        const response = await import(`../assets/${fileName}`);

        if (isMounted) {
          setImage(response.default);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
      return () => (isMounted = false);
    };
    fetchImage();
  }, [fileName]);

  return {
    loading,
    error,
    image,
  };
};

export default useImage;
