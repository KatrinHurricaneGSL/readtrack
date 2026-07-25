export type BookStatus =
    |"В планах"
    | "Читаю"
    | "Прочитано" 

export type StatusFilter = "all" | BookStatus

export type SortOrder =  
    | "default"
    | "asc"
    | "desc"

export interface Book {
    id: string;
    title: string;
    author: string;
    year: number;
    status: BookStatus;
    image: string;
}

