import { getImages } from "../services/api";
import { LoadMoreButton } from "../LoadMoreButton/LoadMoreButton";
import { SearchBar } from "../SearchBar/SearchBar";
import { Loader } from "../Loader/Loader";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { useEffect, useState } from "react";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
// import { ImageModal } from "../ImageModal/ImageModal";

export const Images = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [pictures, setImages] = useState([]);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const onSearch = (value) => {
    if (value.trim() === "") {
      setErrorMessage("Sorry. Search field can not be empty");
      return;
    }
    setImages([]);
    setPage(1);
    setTotal(0);
    setQuery(value.trim());
    setError(null);
  };
  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const { results, total } = await getImages(query, page);
        setImages([...pictures, ...results]);
        setTotal(total);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, [query, page]);

  const onClick = () => {
    setPage(page + 1);
  };

  return (
    <>
      <SearchBar onSearch={onSearch} />
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {error && <ErrorMessage message={`Error: ${error}`} />}
      <ImageGallery images={pictures} />
      {pictures.length > 0 && total > pictures.length && (
        <LoadMoreButton onClick={onClick}>View more</LoadMoreButton>
      )}
      {pictures.length === 0 && query !== "" && !error && (
        <p>sorry by your queries {query} nothing was found</p>
      )}

      {error && <p>sorry there is an error {error}</p>}
      {isLoading && <Loader />}
    </>
  );
};
