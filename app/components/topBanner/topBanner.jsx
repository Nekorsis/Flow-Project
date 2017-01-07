import React from 'react';

import './topBanner.styl';

const TopBanner = ({city}) => {
  return (
    <div className={'top-banner-container ' + city}>
    </div>
  );
};

TopBanner.propTypes = {
  city: React.PropTypes.string.isRequired,
};

export default TopBanner;
