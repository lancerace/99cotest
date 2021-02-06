import React, { PureComponent } from "react";
import CarouselSlider from "./CarouselSlider";
import styles from './style.module.css';

class ListingItem extends PureComponent {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick(this.props.listing.id);
  }

  render() {
    const { photos, address_line_1,  attributes, } = this.props.listing;
    const { bedrooms, bathrooms, area_size_formatted,price_formatted } = attributes;
    //256x152
    return (
      <div className={[styles.paper, styles.item].join(" ")}>
        {/*<div className={styles['image-container']}>
          <img src={photos[0].url} alt="Italian Trulli"></img>
    </div>*/}

        {<CarouselSlider photos={photos} dot={5}></CarouselSlider> }
 
        <h4 style={{ color: `rgb(255,61,239)`,fontSize:'15px' }}>CONDO FOR SALE</h4>
        <h2>{price_formatted.substring(1, price_formatted.length)}</h2>
        <p>{address_line_1}</p>
        <p>{bedrooms} beds &ensp; {bathrooms} baths &ensp;{area_size_formatted}</p></div>)
  }
}

export default ListingItem;
