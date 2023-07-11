import { Title } from "~/components";
import { Button } from "~/components/Button";

interface CourseCardProps {
	title: string;
	image: string;
	description: string;
	url: string;
}

function CourseCard({ title, image, description, url }: CourseCardProps) {
	return (
		<div className="mt-6 grid gap-4 overflow-hidden lg:rounded-md lg:border lg:border-pink-300 lg:p-6">
			<h3 className="font-heading text-xl">{title}</h3>
			<img src={image} alt={title} className="mx-auto block w-full max-w-lg" />
			<p>{description}</p>
			<Button
				label="Enroll"
				to={url}
				external
				icon={
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="h-6 w-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
						/>
					</svg>
				}
			/>
		</div>
	);
}

export default function CoursesPage() {
	return (
		<article className="grid gap-4 px-4">
			<Title>Courses</Title>
			<div className="text-slate-600 dark:text-slate-300">
				<p>
					I have in the past produced a few courses for Pluralsight. You can
					find them below:
				</p>
				<div className="lg:grid lg:grid-cols-2 lg:gap-6">
					<CourseCard
						title="Getting the Most from the TypeScript Compiler"
						url="https://app.pluralsight.com/library/courses/typescript-compiler/table-of-contents"
						image="https://res.cloudinary.com/duacbnsfa/image/upload/f_auto,q_auto/v1/courses/h7akqj3ee5gbmj213r8f"
						description="This course, Getting the Most from the TypeScript Compiler, will teach you advanced techniques of TypeScript, how to rely on the compiler to avoid errors, how to have rapid feedback, and how to improve the code maintainability."
					/>
					<CourseCard
						title="Writing Functional JavaScript Using Ramda"
						url="https://app.pluralsight.com/library/courses/javascript-ramda-functional/table-of-contents"
						image="https://res.cloudinary.com/duacbnsfa/image/upload/f_auto,q_auto/v1/courses/eodpah2za5edc0l6dxan"
						description="This course will introduce you to the basics of functional programming in JavaScript including what pure functions are, currying, composition, and how to control the application flow in a functional way."
					/>
				</div>
			</div>
		</article>
	);
}
