// connect/test js file to html





// .getElementsByTagName()
//document.getElementsByTagName('h1') ---- see rec'g---------------------------

// .getElementsByClassName()

// .getElementById()

// .querySelector() (ES6 Modern Approach)

// .querySelectorAll()

// .innerText property: Changes the text

// .innerHTML property: Allows you to write HTML code

// .createElement()

// NOTE: Rememeber when creating an element in JS, you need to append to your document with .append()

// Javascript is an event driven language
// We can take advantage of its events by using .addEventListener(event_type, callback function)

// Option 2: using onclick attribute in HTML
// onclick="function(event)"







// Lets create a new button and append to a specfic div

// (see above example)



// adding addEventListener() to new button to add text every time its clicked

const btn = document.createElement('button')
dylansDiv.append(btn)
btn.innerText = 'Adding text'

btn.addEventListener('click'), () => {
    const pTag = document.createElement('p')
    pTag.innerText = 'YEERRR'
    dylansDiv.append(pTag)

}


// grabbing form data with .addEventListener()



//******************************RECORDING GAP HERE******************************************************


//HW---------------------------
const pokeDiv = document.querySelector('.poke-div')

const pokemonData = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon--------see RECORDINGGGGGGGGGGGGGGGG`)
    const data = await response.json()
    console.log(data)
    pokeDiv.innerHTML = `
    
    see recodingg------------------
    
    
    
    `

    


}
