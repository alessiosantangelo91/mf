type Character = {
    name: string;
    birthYear: string;
    profileUrl: string;
};
export declare class StarWarsCharacters {
    characterId?: string;
    characters: Character[];
    loading: boolean;
    componentWillLoad(): void;
    render(): any;
}
export {};
