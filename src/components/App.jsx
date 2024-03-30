import css from "./App.module.css";
import { Images } from "./Images/Images";

const App = () => {
  return (
    <div className={css.container}>
      <Images />
    </div>
  );
};

export default App;

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { FiSearch } from "react-icons/fi";
// import { BeatLoader } from "react-spinners";
// import Modal from "react-modal";
// import styles from "./App.module.css";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import css from "./App.module.css";

// const API_KEY = "LzoDWcfu-nIfccjYBx8KFi7DskdPURuJ4Wz_JNn2SoY";
// axios.defaults.baseURL = "https://api.unsplash.com/";
// axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;
// axios.defaults.params = {
//   per_page: 15,
// };

// const SearchBar = ({ onSubmit }) => {
//   const [query, setQuery] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (query.trim() !== "") {
//       onSubmit(query.trim());
//     } else {
//       toast.error("Please enter a search term", {
//         position: "top-center",
//       });
//     }
//   };

//   return (
//     <header className={styles.searchHeader}>
//       <form className={styles.form} onSubmit={handleSubmit}>
//         <input
//           className={styles.input}
//           type="text"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search images and photos"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//         />
//         <button className={styles.searchButton} type="submit">
//           <FiSearch size="16px" />
//         </button>
//       </form>
//     </header>
//   );
// };

// const ImageCard = ({ imageUrl, alt, onClick }) => {
//   return (
//     <div className={styles.cardItem}>
//       <div className={styles.thumb} onClick={onClick}>
//         <img src={imageUrl} alt={alt} />
//       </div>
//     </div>
//   );
// };

// const ImageGallery = ({ images, onImageClick }) => {
//   return (
//     <ul className={styles.gallery}>
//       {images.map((image) => (
//         <li key={image.id}>
//           <ImageCard
//             imageUrl={image.urls.small}
//             alt={image.alt_description}
//             onClick={() => onImageClick(image)}
//           />
//         </li>
//       ))}
//     </ul>
//   );
// };

// const Loader = () => {
//   return (
//     <div className={css.loader}>
//       <BeatLoader color="#36d7b7" />
//     </div>
//   );
// };

// const ErrorMessage = ({ message }) => {
//   return <p className={css.error}>{message}</p>;
// };

// const LoadMoreButton = ({ onClick }) => {
//   return (
//     <div>
//       <button className={styles.loadMore} onClick={onClick}>
//         Load More
//       </button>
//     </div>
//   );
// };

// const ImageModal = ({ isOpen, onClose, imageUrl, alt }) => {
//   return (
//     <Modal isOpen={isOpen} onRequestClose={onClose} className={css.modal}>
//       <img src={imageUrl} alt={alt} />
//     </Modal>
//   );
// };

// const App = () => {
//   const [query, setQuery] = useState("");
//   const [images, setImages] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [page, setPage] = useState(1);
//   const [selectedImage, setSelectedImage] = useState(null);

//   useEffect(() => {
//     Modal.setAppElement("#root");
//   }, []);

//   useEffect(() => {
//     const fetchImages = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get(
//           `/search/photos?query=${query}&page=${page}`
//         );
//         setImages((prevImages) => [...prevImages, ...response.data.results]);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (query.trim() !== "") {
//       fetchImages();
//     }
//   }, [query, page]);

//   const handleSearchSubmit = (query) => {
//     setQuery(query);
//     setImages([]);
//     setPage(1);
//     setError(null);
//   };

//   const handleLoadMore = () => {
//     setPage((prevPage) => prevPage + 1);
//   };

//   const handleImageClick = (image) => {
//     setSelectedImage(image);
//   };

//   const handleCloseModal = () => {
//     setSelectedImage(null);
//   };

//   return (
//     <div className={css.container}>
//       <SearchBar onSubmit={handleSearchSubmit} />
//       <ToastContainer position="top-center" />
//       {error && <ErrorMessage message={`Error: ${error}`} />}
//       {loading && <Loader />}
//       {images.length === 0 && query !== "" && !error && (
//         <p>sorry by your queries {query} nothing was found</p>
//       )}
//       {images.length > 0 && (
//         <ImageGallery images={images} onImageClick={handleImageClick} />
//       )}
//       {images.length > 0 && <LoadMoreButton onClick={handleLoadMore} />}
//       {selectedImage && (
//         <ImageModal
//           isOpen={selectedImage !== null}
//           onClose={handleCloseModal}
//           imageUrl={selectedImage.urls.regular}
//           alt={selectedImage.alt_description}
//         />
//       )}
//     </div>
//   );
// };

// export default App;
