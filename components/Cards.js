// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

axios
	.get('https://lambda-times-backend.herokuapp.com/articles')
	.then(result => {
		console.log(result)
        const data = result.data.articles;
        Object.values(data).forEach((articles) => {
            articles.forEach((article) => {
                cardsContainer.append(createCards(article));
            })
        })
	})
	.catch(error => {
		console.log('An error has occurred', error)
	});

const cardsContainer = document.querySelector('.cards-container')

function createCards(obj) {
	const card = document.createElement('div');
	const headline = document.createElement('div');
	const author = document.createElement('div');
	const imgContainer = document.createElement('div');
	const image = document.createElement('img');
	const name = document.createElement('span');

	card.classList.add('card');
	headline.classList.add('headline');
	author.classList.add('author');
	imgContainer.classList.add('img-container');

    image.src = obj.authorPhoto;
	
	headline.textContent = obj.headline;
    name.textContent = `By ${obj.authorName}`;
    
    imgContainer.appendChild(image);
    author.append(imgContainer, name);
    card.append(headline, author);

	card.addEventListener('click', () => {
		console.log(obj.headline)
	});
    
	return card;
}