export const setupSearch = (element: HTMLInputElement) => {
  element.addEventListener('input', (event: Event) => {
    const searchTerm = event?.target?.value; 

    console.log(searchTerm);
  })
}