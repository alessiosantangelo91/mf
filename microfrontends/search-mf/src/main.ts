import './style.scss'
import { setupSearch } from './search.ts'

setupSearch(document.querySelector<HTMLInputElement>('#search-term')!)