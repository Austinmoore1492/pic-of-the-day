import React from 'react';
import PropTypes from 'prop-types';

class Photo extends React.Component {
  render() {
    return (
      <div
        style={{
          marginBottom: '2rem'
        }}
      >
        <h3 className="title">{this.props.photo.title}</h3>
        <div className="nasaPics">
          {//Switch between video or image depending on data from the API
          (() => {
            switch (this.props.photo.media_type) {
              case 'video':
                return (
                  <iframe
                    title={this.props.photo.title}
                    src={this.props.photo.url}
                    className="video"
                  />
                );
              case 'image':
                return (
                  <img
                    src={this.props.photo.url}
                    alt={this.props.photo.title}
                  />
                );
              default:
                return <p>Hang on we're getting it for you</p>;
            }
          })()}

          <p>{this.props.photo.explanation}</p>
        </div>
      </div>
    );
  }
}

Photo.propTypes = {
  src: PropTypes.object,
  alt: PropTypes.object
};
export default Photo;
