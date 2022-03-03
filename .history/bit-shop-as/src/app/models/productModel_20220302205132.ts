export class Product {
  //attr
  _id: string;
  name: string;
  price: number;
  availableElements: number;
  description: string;
  image: string;
  tags: string[];

  constructor(
    _id = '',
    name = '',
    price = 0,
    availableElements = 0,
    description: '',
    image = '',
    tags = []
  ) {
    this._id = _id;
    this.name = name;
    this.price = price;
    this.availableElements = availableElements;
    this.description = description;
    this.image = image;
    this.tags = tags;
  }
}
