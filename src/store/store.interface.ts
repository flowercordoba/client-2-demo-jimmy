import { IAuthUser } from "../features/auth/interfaces/auth.interface";


export interface IReduxState {
  authUser: IAuthUser;
  header: string;
  logout: boolean;
  showCategoryContainer: boolean;

}
