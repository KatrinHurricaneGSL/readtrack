import { statuses } from '../../data/bookStatuses'
import type { SortOrder, StatusFilter } from '../../types/book'
import styles from "./BookFilters.module.css"

interface Props {
    status: StatusFilter;
    sortOrder: SortOrder;
    onSelectStatus?: (value: StatusFilter) => void;
    onSortOrder?: (value: SortOrder) => void;
}

export function BookFilters({ status, sortOrder, onSelectStatus, onSortOrder }: Props) {

    return (
        <div className={styles.filters}>
            <div className={styles.field}>
                <label htmlFor="status-filter">Статус</label>
                <select
                    id="status-filter"
                    value={status}
                    onChange={(event) => onSelectStatus?.(event.target.value as StatusFilter)}
                >
                    <option value="all">Все статусы</option>
                    {statuses.map((status) => (
                        <option key={status} value={status}>
                            {status}
                        </option>
                    ))}
                </select>
            </div>

            <div className={styles.field}>
                <label htmlFor="sort-books">Сортировка</label>
                <select
                    id="sort-books"
                    value={sortOrder}
                    onChange={(event) => onSortOrder?.(event.target.value as SortOrder)}
                >
                    <option value="default">Без сортировки</option>
                    <option value="asc">Сначала старые</option>
                    <option value="desc">Сначала новые</option>
                </select>
            </div>

        </div>
    )
}