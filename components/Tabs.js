// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

// selecting the topics from document
const topics = document.querySelector('.topics');

// function that will create a new tab when a topic is passed as an argument
function createTab(data) {
    // creating elements from document
    const tab = document.createElement('div')

    // adding class names to element
    tab.classList.add('tab')

    // adding text to the element
    tab.textContent = data
    
	return tab
}

axios
	.get("https://lambda-times-api.herokuapp.com/topics")
	.then(result => {
		result.data.topics.forEach(topic => {
            // appending each tab that is created to the topics container
			topics.append(createTab(topic))
        })
    })
    // when an error is found it will be console.log 
	.catch(error => {
		console.log('An error has occurred', error)
	})