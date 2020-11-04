
export class User {
  constructor() {}
  name: string = null;
  email: string = null;
  collection: Collection[] = [];

}

export class Collection {
  constructor() {}
  id: string = null;
  imageUrl: string = null;
  description: string = null;
}
