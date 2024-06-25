import { newSpecPage } from '@stencil/core/testing';
import { StarWarsCharacters } from './star-wars-characters';

describe('star-wars-characters', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [StarWarsCharacters],
      html: '<star-wars-characters></star-wars-characters>',
    });
    expect(root).toEqualHtml(`
      <star-wars-characters>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </star-wars-characters>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [StarWarsCharacters],
      html: `<star-wars-characters first="Stencil" last="'Don't call me a framework' JS"></star-wars-characters>`,
    });
    expect(root).toEqualHtml(`
      <star-wars-characters first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </star-wars-characters>
    `);
  });
});
