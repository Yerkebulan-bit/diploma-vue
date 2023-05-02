import type {SortOrder} from "@/utiities/enums/sort-order";
export interface SearchFilter {
    offset: number;
    limit: number;
    search: string;
    searchColumn: string;
    sortColumn: string;
    sortOrder: SortOrder;
    onlyMain: boolean;
    currentWeek: boolean;
}
