import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ImageGallery from './ImageGallery';
import styles from './styles.module.css';
import '../index'

class App extends Component {
  state = {
    searchTerm: ''
  };

  handleSearch = (term) => {
    this.setState({ searchTerm: term });
  };

  render() {
    const { searchTerm } = this.state;

    return (
      <div className={styles.App}>
        <SearchBar onSearch={this.handleSearch} />
        <ImageGallery searchTerm={searchTerm} />
      </div>
    );
  }
}

export default App;

