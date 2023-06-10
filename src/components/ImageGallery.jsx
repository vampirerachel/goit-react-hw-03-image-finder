import React, { Component } from 'react';
import axios from 'axios';
import ImageGalleryItem from './ImageGalleryItem';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal'; // Import the Modal component
import styles from "./styles.module.css";

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      loading: true,
      page: 1,
      showModal: false,
      selectedImage: null
    };
  }
  
  componentDidMount() {
    this.fetchImages();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchTerm !== this.props.searchTerm) {
      this.setState({ images: [], loading: true, page: 1 }, this.fetchImages);
    }
  }

  fetchImages = async () => {
    const { searchTerm } = this.props;
    const { page } = this.state;
    if (!searchTerm) {
      this.setState({ images: [], loading: false });
      return;
    }

    try {
      this.setState({ loading: true });
      const response = await axios.get(
        `https://pixabay.com/api/?q=${searchTerm}&page=${page}&key=35513783-cdd32f526a75b86a8cfb6c8f5&image_type=photo&orientation=horizontal&per_page=12`
      );
      const newImages = response.data.hits;
      this.setState((prevState) => ({
        images: [...prevState.images, ...newImages],
        loading: false,
        page: prevState.page + 1
      }));
    } catch (error) {
      console.log(error);
    }
  };

  openModal = (image) => {
    this.setState({ showModal: true, selectedImage: image });
  };

  closeModal = () => {
    this.setState({ showModal: false, selectedImage: null });
  };

  handleLoadMore = () => {
    this.fetchImages();
    // Scroll to the bottom of the page after loading more images
    window.scrollTo(0, document.body.scrollHeight);
  };

  render() {
    const { images, loading, showModal, selectedImage } = this.state;

    return (
      <div>
        {loading && images.length === 0 ? (
          <Loader /> // Display the Loader component while initial images are being loaded
        ) : null}

        {images.length > 0 && (
          <ul className={styles.ImageGallery}>
            {images.map((image) => (
              <ImageGalleryItem
                key={image.id}
                image={image}
                onClick={() => this.openModal(image)}
              />
            ))}
          </ul>
        )}

        {images.length > 0 && !loading && (
          <Button onClick={this.handleLoadMore}>Load More</Button>
        )}

        {showModal && selectedImage && (
          <Modal image={selectedImage} onClose={this.closeModal} />
        )}
      </div>
    );
  }
}

export default ImageGallery;



