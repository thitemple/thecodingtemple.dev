import { formatDate } from "~/utils/dateFormats";

interface PostMetaProps {
  date: Date;
  readTime?: number;
}

export function PostMeta({
	date,
	readTime,
}: PostMetaProps) {
	return (
		<>
			<span>{formatDate(date)}</span>
			{readTime && (
				<>
					{" "}
					• <span>{readTime} min read</span>
				</>
			)}
		</>
	);
}