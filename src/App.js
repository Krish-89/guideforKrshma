import './categories.styles.scss';
import CategoryItemComponent from './components/category-item/CategoryItem';

// install sass
// npm i sass --save-dev
// https://sass-lang.com/guide/
const App = () => {
   const categories = [
        {
            id: 1,
            title: 'hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        },
        {
            id: 2,
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        },
        {
            id: 3,
            title: 'sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        },
        {
            id: 4,
            title: 'womens',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        },
        {
            id: 5,
            title: 'mens',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        },
    ];

  // one main thing now App.js hamesh neat and clean and kam code hona chahiye to now 
  //  <div className='categories-container'>
  //             {categories.map((category) => (
  //                 <CategoryItem key={category.id} category={category} />
  //             ))}
  //  </div>
  // isko utha ke iska bhi ek compoent banao 
  // and directly us component ko yha render karao

  return (
    <>
      {<CategoryItemComponent categories={categories}/>}
    </>
  );
};

export default App;
