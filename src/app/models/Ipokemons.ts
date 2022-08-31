export interface IPokemon {
  name: string;
  id: number;
  types: {
    types: [{
      type: {
        name: string,
      }
    }];
  },
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      }
    }
  }
}

