import { User } from "./user";
import { Item } from "./item";

export class Review {
  public id: Number;

  public user: User;

  public item: Item;

  public rating: Number;
}
