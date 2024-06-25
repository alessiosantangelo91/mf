import type { Components, JSX } from "../types/components";

interface StarWarsCharacters extends Components.StarWarsCharacters, HTMLElement {}
export const StarWarsCharacters: {
    prototype: StarWarsCharacters;
    new (): StarWarsCharacters;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
