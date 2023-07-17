import { loadHeaderAndFooter } from './utilities.js';

loadHeaderAndFooter();

const categoriesArray = [
  {
    category: 'Brick Guards',
    link: 'categories/index.html?category=brickGuards',
    imageUrl: './assets/brick.jpg',
    altImage: 'Brick category',
  },
  {
    category: 'Steel Corners',
    link: 'categories/index.html?category=steelCorners',
    imageUrl: './assets/steel.jpg',
    altImage: 'Steel Corners category',
  },
  {
    category: 'Rachets & Straps',
    link: 'categories/index.html?category=straps',
    imageUrl: './assets/strap.jpg',
    altImage: 'Strap category',
  },
  {
    category: 'Winches',
    link: 'categories/index.html?category=winches',
    imageUrl: './assets/winch.jpg',
    altImage: 'Winches category',
  },
];

const categoryHtml = (categories) => {
  const result = categories.map((category) => {
    // Category template
    return `<a href="/${category.link}" class="homeGrid__category">
      <h3>${category.category}</h3>

      <img src="${category.imageUrl}" alt="${category.altImage}" />

      <div class="homeGrid__category-overlay"></div>
    </a>`;
  });

  return result;
};

const categoriesContainer = document.querySelector('.homeGrid__categories');

// Injecting categories into DOM
const categoriesHtml = categoryHtml(categoriesArray).join(' ');
categoriesContainer.innerHTML = categoriesHtml;
