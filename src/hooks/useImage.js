import { useEffect, useState } from "react";

const useImage = (paths, planetName) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImage = async () => {
      let isMounted = true;

      try {
        const promises = paths.map(({ fileName }) =>
          import(`../assets/${fileName}`)
        );

        Promise.all(promises).then((fulfilledPromises) => {
          if (isMounted) {
            const response = {};

            fulfilledPromises.forEach((fulfilled, index) => {
              response[paths[index].aspect] = fulfilled.default;
            });

            setImages(response);
          }
        });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
      return () => (isMounted = false);
    };
    fetchImage();
  }, [planetName]);

  return {
    loading,
    error,
    images,
  };
};

export default useImage;
