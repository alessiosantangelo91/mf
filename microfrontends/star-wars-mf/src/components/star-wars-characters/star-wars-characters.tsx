import { Component, Prop, State, h } from '@stencil/core';

type StartWarsAPIResponse = {
  count: number;
  results: { name: string; birth_year: string; url: string; }[]
}

type Character = {
  name: string; 
  birthYear: string;
  profileUrl: string; 
}

@Component({
  tag: 'star-wars-characters',
  styleUrl: 'star-wars-characters.scss',
  shadow: false,
})
export class StarWarsCharacters {
  @Prop() characterId?: string;

  @State() characters: Character[] = []; 
  @State() loading: boolean = false;

  componentWillLoad() {
    this.loading = true;

    const url = `https://swapi.dev/api/people/${this.characterId || ''}`
    
    fetch(url)
      .then(raw => raw.json())
      .then(({results}: StartWarsAPIResponse) => {
        this.characters = results.map(r => ({ birthYear: r.birth_year, name: r.name, profileUrl: r.url }))
        this.loading = false;
      })
      .catch((e) => {
        console.error(e); 
      });
  }

  render() {
    return (
      <div class="swc-wrapper">
          { this.loading && <span>Loading data...</span> }
          { !this.loading &&
            this.characters.map(c => (
              <article key={c.name} class="swc-character">
                  <span class="swc-character__name">{c.name}</span>
                  <span class="swc-character__birth">Born: {c.birthYear}</span>
                  <a href={c.profileUrl} class="swc-character__profile link">Profile</a>
              </article>
            ))
          }
      </div>
    )
  }
}
