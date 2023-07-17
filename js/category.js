import { loadHeaderAndFooter, getParam } from './utilities.js';

loadHeaderAndFooter();

const categoriesText = [
  {
    heading: 'Winches',
    categoryPath: 'winches',
    subheading:
      'Made in the USA - 100% guaranteed against failure. Best winches in America',
  },
  {
    heading: 'Steel Corners',
    categoryPath: 'steelCorners',
    subheading:
      'Made in the USA - 100% guaranteed against failure. Best Steel Corners in America',
  },
  {
    heading: 'Brick Guards',
    categoryPath: 'brickGuards',
    subheading:
      'Made in the USA - 100% guaranteed against failure. Best Brick Guards in America',
  },
  {
    heading: 'Rachets & Straps',
    categoryPath: 'straps',
    subheading:
      'Made in the USA - 100% guaranteed against failure. Best Straps in America',
  },
];

// Getting current page category from params
const currentCategory = getParam('category');

// Getting heading and subheadings according to category
const { heading, subheading } = categoriesText.find(
  (category) => category.categoryPath === currentCategory
);

// Product template array from current page category
const productCategoryTemplate = (categoryInventory) => {
  const result = categoryInventory.map((product) => {
    return `<a href="/products/index.html?partNumber=${product.partNumber}" class="products-product">
      <img src="${product.imageUrl}" alt="${product.description}" />
      <div class="productInfo">
        <h2>${product.partNumber}</h2>
        <p>"${product.description}</p>
      </div>
    </a>
  `;
  });

  return result;
};

// Fetching products from 'database' according to category
const productsResponse = await fetch('../allProducts.json');
const productsData = await productsResponse.json();
const categoryProducts = productsData.filter(
  (product) => product.category === currentCategory
);

// HTML ready to be injected with products from such category
const productsHtmlReady = productCategoryTemplate(categoryProducts).join(' ');

const categoryHtmlTemplate = `
  <h1>${heading}</h1>

  <p>
    ${subheading}
  </p>

  <div class="products__search">
    <input id="searchInput" type="text" />

    <img
      id="searchIcon"
      src="../assets/magnify.svg"
      alt="Search icon for products"
    />
  </div>

  <div class="products__container">
    
  </div>
`;

const categoryContainer = document.getElementById('products');
categoryContainer.innerHTML = categoryHtmlTemplate;

const productsContainer = document.querySelector('.products__container');
productsContainer.innerHTML = productsHtmlReady;

// SEARCHING LOGIC

const searchInput = document.getElementById('searchInput');
const searchIcon = document.getElementById('searchIcon');

searchIcon.addEventListener('click', () => {
  if (searchInput.value.trim() !== '') {
    // TODO: Include logic for search
    console.log('Something');
  }
});
