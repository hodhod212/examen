import Image1 from './images/hats.png';
import Image2 from './images/jackets.png';
import Image3 from './images/sneakers.png';
import Image4 from './images/womens.png';
import Image5 from './images/mens.png';
const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: Image1,
      id: 1,
      linkUrl:'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: Image2,
      id: 2,
      linkUrl:'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl: Image3,
      id: 3,
      linkUrl:'shop/sneakers'
    },
    {
      title: 'womens',
      imageUrl: Image4,
      size: 'large',
      id: 4,
      linkUrl:'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: Image5,
      size: 'large',
      id: 5,
      linkUrl:'shop/mens'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
