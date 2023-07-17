import { loadHeaderAndFooter, getParam } from './utilities.js';

loadHeaderAndFooter();

// Getting partNumber from url
const partNumberParam = getParam('partNumber');

// Fetching products from 'database' according to partNumber and finding single product
const productResponse = await fetch('../allProducts.json');
const productData = await productResponse.json();
const singleProduct = productData.find(
  (product) => product.partNumber === partNumberParam
);

// Input Color HTML template
const inputColorTemplate = (color) => {
  const result = `<label for="${color}Input" style="background-color: ${color};" class="input-label"><input type="radio" name="color" id="${color}Input" class="input-${color}" /></label>`;

  return result;
};

// Get one input for each color and join them to generate HTML
const inputColorsArray = singleProduct?.colors?.map((color) =>
  inputColorTemplate(color)
);
const inputColorsHtml = inputColorsArray.join(' ');

// Single product HTML template
const singleProductTemplate = (productData) => {
  const result = `
        <img src="${productData.imageUrl}" alt="${productData.description}" />

        <h1>${productData.partNumber}</h1>

        <p class="product__description">${productData.description}</p>

        <p class="product__price">
        Price: $<span id="productPrice">${productData.price}</span>
        </p>

        <div class="product__quantity">
        <img
            src="../assets/minus.svg"
            alt="Icon for decreasing quantity of product"
        />

        <p>2</p>

        <img
            src="../assets/plus.svg"
            alt="Icon for increasing quantity of product"
        />
        </div>

        <div class="product__color">
        <p>Color:</p>

        <div class="product__colors">
            ${inputColorsHtml}
        </div>
        </div>

        <div class="product__add">Add to Cart</div>
    `;

  return result;
};

const singleProductContainer = document.querySelector('.product__wrapper');
singleProductContainer.innerHTML = singleProductTemplate(singleProduct);
