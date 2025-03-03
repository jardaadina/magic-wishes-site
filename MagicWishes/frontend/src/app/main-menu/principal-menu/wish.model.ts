export interface Wish {
  id?: number;
  title: string;
  description: string;
  userId: number;
  date: string;
  active: boolean;
  userIdWhoFulfill?: number;
}
