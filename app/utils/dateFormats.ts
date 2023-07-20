export function formatDate(sourceDate: Date | string | number) {
	const date =
		typeof sourceDate === "string" || typeof sourceDate === "number"
			? new Date(sourceDate)
			: sourceDate;

	return new Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
		date,
	);
}
