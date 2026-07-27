import { statuses } from '../../data/bookStatuses'
import type { SortOrder, StatusFilter } from '../../types/book'
import styles from "./BookFilters.module.css"

interface Props {
    status: StatusFilter;
    sortOrder: SortOrder;
    showFavoritesOnly: boolean;
    onSelectStatus?: (value: StatusFilter) => void;
    onSortOrder?: (value: SortOrder) => void;
    onToggleFavoritesOnly: (value: boolean) => void;
}

export function BookFilters({ status, sortOrder, showFavoritesOnly, onSelectStatus, onSortOrder, onToggleFavoritesOnly }: Props) {

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
                    <option value="title-asc">По названию (А-Я)</option>
                    <option value="title-desc">По названию (Я-А)</option>
                    <option value="year-asc">По году (сначала старые)</option>
                    <option value="year-desc">По году (сначала новые)</option>
                </select>
            </div>

            <div className={styles.checkbox}>
                <input
                    id="favorites-filter"
                    type='checkbox'
                    checked={showFavoritesOnly}
                    onChange={(event) => {
                        onToggleFavoritesOnly(event.target.checked)
                    }}
                />

                <label htmlFor='favorites-filter'>
                    Только избранное
                </label>
            </div>
        </div>
    )
}