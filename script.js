const root = document.getElementById('root');
const navbar = document.createElement('nav');
navbar.classList.add('navbar');
navbar.id = 'navbar';


const logo = document.createElement('div');
logo.classList.add('logo');
logo.id = 'logo';
logo.textContent = 'Carzone';
navbar.appendChild(logo);


const menu = document.createElement('ul');
menu.classList.add('menu');
menu.id = 'menu';


const menuItems = ['Home', 'Service', 'Featured Cars', 'New Cars', 'Contact'];
menuItems.forEach(item => {
  const li = document.createElement('li');
  li.id = item.toLowerCase().replace(' ', '') + 'Link';
  li.textContent = item;
  menu.appendChild(li);
});


navbar.appendChild(menu);


root.appendChild(navbar);


const heroSection = document.createElement('div');
heroSection.classList.add('hero-section');
heroSection.id = 'heroSection';


const heroContent = document.createElement('div');
heroContent.classList.add('hero-content');
heroContent.id = 'heroContent';


const mainHeading = document.createElement('h1');
mainHeading.id = 'mainHeading';
mainHeading.innerHTML = `GET YOUR <span class="highlight" id="dreamCar">DREAM CAR</span> AT A <span class="highlight" id="dreamPrice">DREAM PRICE</span>`;
heroContent.appendChild(mainHeading);


const subHeading = document.createElement('h2');
subHeading.id = 'subHeading';
subHeading.textContent = 'The largest inventory of cars in Northern India';
heroContent.appendChild(subHeading);


const contactButton = document.createElement('button');
contactButton.classList.add('contact-btn');
contactButton.id = 'contactButton';
contactButton.textContent = 'Contact Us';
heroContent.appendChild(contactButton);




heroSection.appendChild(heroContent);


root.appendChild(heroSection);


const filterFeatureSection = document.createElement('div');
filterFeatureSection.classList.add('filter-feature-section');
filterFeatureSection.id = 'featureServiceSection';


const filterContent = document.createElement('div');
filterContent.classList.add('filter-content');
filterContent.id = 'filterContent';


const filterSection = document.createElement('div');
filterSection.classList.add('filter-section');
filterSection.id = 'filterSection';


const filterTable = document.createElement('div');
filterTable.classList.add('filter-table');


const filterRow1 = document.createElement('div');
filterRow1.classList.add('filter-row');


const yearSelect = createSelectElement('year', ['Year', '2022', '2021', '2020']);
const makeSelect = createSelectElement('make', ['Make', 'Toyota', 'Honda', 'Ford']);
const modelSelect = createSelectElement('model', ['Model', 'Sedan', 'SUV', 'Truck']);


filterRow1.appendChild(yearSelect);
filterRow1.appendChild(makeSelect);
filterRow1.appendChild(modelSelect);
filterTable.appendChild(filterRow1);


const filterRow2 = document.createElement('div');
filterRow2.classList.add('filter-row');


const styleSelect = createSelectElement('style', ['Style', 'Coupe', 'Convertible', 'SUV']);
const conditionSelect = createSelectElement('condition', ['Condition', 'New', 'Used']);
const priceSelect = createSelectElement('price', ['Price', 'Under $20,000', 'Under $50,000', 'Over $50,000']);


filterRow2.appendChild(styleSelect);
filterRow2.appendChild(conditionSelect);
filterRow2.appendChild(priceSelect);
filterTable.appendChild(filterRow2);


// Add filter table to filter section
filterSection.appendChild(filterTable);


// Search button
const searchButton = document.createElement('button');
searchButton.classList.add('search-btn');
searchButton.id = 'searchButton';
searchButton.textContent = 'Search';
filterSection.appendChild(searchButton);


// Add filter section to filter content
filterContent.appendChild(filterSection);


// Feature section
const featureSection = document.createElement('div');
featureSection.classList.add('feature-section');
featureSection.id = 'featureSection';


const featureCards = [
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/2211/2211425.png',
    title: 'Largest Dealership',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.'
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/18497/18497231.png',
    title: 'Unlimited Warranty',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.'
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/1456/1456840.png',
    title: 'Insurance Support',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.'
  }
];


featureCards.forEach(card => {
  const serviceCard = document.createElement('div');
  serviceCard.classList.add('service-card');


  const serviceIcon = document.createElement('img');
  serviceIcon.classList.add('service-icon');
  serviceIcon.src = card.icon;
  serviceIcon.alt = `${card.title} Icon`;


  const serviceTitle = document.createElement('h3');
  serviceTitle.classList.add('service-title');
  serviceTitle.textContent = card.title;


  const serviceDescription = document.createElement('p');
  serviceDescription.classList.add('service-description');
  serviceDescription.textContent = card.description;


  serviceCard.appendChild(serviceIcon);
  serviceCard.appendChild(serviceTitle);
  serviceCard.appendChild(serviceDescription);


  featureSection.appendChild(serviceCard);
});


filterFeatureSection.appendChild(filterContent);
filterFeatureSection.appendChild(featureSection);




root.appendChild(filterFeatureSection);




function createSelectElement(id, options) {
  const select = document.createElement('select');
  select.id = id;


  options.forEach(optionText => {
    const option = document.createElement('option');
    option.textContent = optionText;
    select.appendChild(option);
  });


  return select;
}



