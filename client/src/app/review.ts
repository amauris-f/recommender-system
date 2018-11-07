import { User } from "./user";
import { Item } from "./item";

export class Review {

  public constructor(user?: User , item?: Item, rating?: Number){
    this.user=user;
    this.item=item;
    this.rating=rating;
  }
  public id: Number;

  public user: User;

  public item: Item;

  public rating: Number;
}
