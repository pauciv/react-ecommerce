import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const WishlistIcon = () => {

    const [state, setState] = useState(false)
    

  return (
    <FavoriteBorderIcon
      onClick={() => addToWishlist()}
      className="product__wishlist"
    />
  );
};

export default WishlistIcon;
