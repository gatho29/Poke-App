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
      home: {
        front_default: string;
      }
    }
  }
}

