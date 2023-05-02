import type {INavigation} from "@/domain/interfaces/INavigation.interface";
import type {ISocial} from "@/domain/interfaces/ISocial.interface";

export interface INavigationBlock {
    id: number;
    title: string;
    items: INavigation[] | ISocial[]

}