// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component



function Header() {
    //create elements
    const newHeader = document.createElement('div'),
          date = document.createElement('span'),
          title = document.createElement('h1'),
          temp = document.createElement('span');
    //add class names
    newHeader.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');
    //add text content
    date.textContent = 'March 28, 2019';
    title.textContent = 'Lambda Times';
    temp.textContent = '98°';
    //structure
    newHeader.appendChild(date);
    newHeader.appendChild(title);
    newHeader.appendChild(temp);

    //return
    return newHeader;

}

//get header container
const headerContainer = document.querySelector('.header-container');
console.log(headerContainer);
headerContainer.appendChild(Header());
