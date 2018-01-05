import React from 'react';
import './Business.css';

class Business extends React.Component {
  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <a href={this.props.business.url} target='_blank'>
            <img src={this.props.business.imageSrc} alt={this.props.business.name}/>
          </a>
        </div>
        <h2>{this.props.business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{this.props.business.address}</p>
            <p>{this.props.business.city}, {this.props.business.state}</p>
            <p>{this.props.business.zipCode}</p>
          </div>
          <div className="Business-reviews">
            <h3>{this.props.business.category.map(category => category.title).join(', ')}</h3>
            <h3 className="rating">{`${this.rating} stars`}</h3>
            <p>{`${this.props.business.reviewCount} reviews`}</p>
          </div>
        </div>
      </div>      
    );
  }
}

export default Business;