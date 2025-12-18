import React from 'react';
import PropTypes from 'prop-types';

function FeatureCard({ title, description, className = '' }) {
  return (
    <article className={`feature-card ${className}`} aria-labelledby={`feature-${title}`}>
      <header>
        <h3 id={`feature-${title}`}>{title}</h3>
      </header>
      <p>{description}</p>
    </article>
  );
}

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default FeatureCard;
