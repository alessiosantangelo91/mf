export const setupSearch = (element: HTMLInputElement) => {
  element.addEventListener('input', (event: Event) => {
    const searchTerm = event?.target?.value; 

    window?.eventBus.emit('search-mf:input_filled')
  })
}