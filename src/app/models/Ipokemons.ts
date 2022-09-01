export interface Ipokemon {
  results: any;
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
  height: number;
  weight: number
}

export interface IspeciePokemon {
  flavor_text_entries: [];
}



