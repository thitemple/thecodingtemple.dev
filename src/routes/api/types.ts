export type Paginated<T> = {
	data: T[];
	pageInfo: {
		currentPage: number;
		total: number;
		totalPages: number;
		nextPage?: number;
		previousPage?: number;
	};
};
