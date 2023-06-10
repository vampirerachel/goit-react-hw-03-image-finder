import React, { Component } from 'react';
import axios from 'axios';
import ImageGalleryItem from './ImageGalleryItem';
import Button from './Button';
import Loader from './Loader';
import styles from "./styles.module.css"

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      loading: true
    };
  }
  

componentDidMount() {
  this.fetchImages();
}

  componentDidUpdate(prevProps) {
    if (prevProps.searchTerm !== this.props.searchTerm) {
      this.fetchImages();
    }
  }

 fetchImages = async () => {
  const { searchTerm } = this.props;
  if (!searchTerm) {
    // Handle case when searchTerm is empty
    this.setState({ images: [], loading: false });
    return;
  }

  try {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://pixabay.com/api/?q=${searchTerm}&page=1&key=35513783-cdd32f526a75b86a8cfb6c8f5&image_type=photo&orientation=horizontal&per_page=12`
    );
    this.setState({ images: response.data.hits, loading: false });
  } catch (error) {
    console.log(error);
  }
};


  render() {
    const { images, loading } = this.state;

    return (
      <div>
        {loading ? (
          <Loader /> // Display the Loader component while images are being loaded
        ) : null}
      
        {images.length > 0 && !loading && (
          <ul className={styles.ImageGallery}>
            {images.map((image) => (
              <ImageGalleryItem key={image.id} image={image} />
            ))}
          </ul>
        )}

        {images.length > 0 && !loading && <Button />} {/* Render the Button component if there are loaded images */}
      </div>
    );
  }
}

export default ImageGallery;




