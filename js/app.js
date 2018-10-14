document.addEventListener('DOMContentLoaded', () => {
  console.log("This works")

  const selectDOM = ((domObject) => {
    return document.querySelector(domObject)
  })

  const newTextElement = ((tag, content) => {
    element = document.createElement(tag);
    element.textContent = content;
    return element
  })

  const deleteAll = (() => {
    const listOfAlbums = selectDOM('#listOfAlbums');
    while(listOfAlbums.firstChild){
      listOfAlbums.removeChild(listOfAlbums.firstChild)
    }
  })

  const addItem = ((title, artist, genre, download) => {

    const wrapper = document.createElement('div')

    wrapper.appendChild(newTextElement('h2', title))
    wrapper.appendChild(newTextElement('p', artist))
    wrapper.appendChild(newTextElement('p', genre))
    wrapper.appendChild(newTextElement('p', download))

    const listDiv = selectDOM('#listOfAlbums');
    listDiv.appendChild(wrapper)
  })

  const handleSubmit = ((event) => {
    event.preventDefault()

    const title = event.target.title.value
    const artist = event.target.artist.value
    const genre = event.target.genre.value
    const download = event.target.download.value

    addItem(title, artist, genre, download)

    const form = event.target
    form.reset()
  })

  const form = selectDOM('form')
  form.addEventListener('submit', handleSubmit)

  const deleteBtn = selectDOM('#deleteAll')
  deleteBtn.addEventListener('click', deleteAll)




})
