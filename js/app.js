document.addEventListener('DOMContentLoaded', () => {
console.log("This works")
  const handleSubmit = ((event) => {
    event.preventDefault()

    const title = event.target.title.value;
    const artist = event.target.artist.value;
    const genre = event.target.genre.value;

    const wrapper = document.createElement('div')

    const titleElement = document.createElement('h2');
    titleElement.textContent = title;

    const artistElement = document.createElement('p');
    titleElement.textContent = artist;

    const genreElement = document.createElement('p');
    titleElement.textContent = genre;

    const form = event.target
    form.reset()

  })

  const form = document.querySelector('form')
  form.addEventListener('submit', handleSubmit)



})
