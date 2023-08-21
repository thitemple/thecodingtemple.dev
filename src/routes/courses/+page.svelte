<script lang="ts">
	import Title from "$lib/components/title.svelte";
	import CourseCard from "./course-card.svelte";
</script>

<article class="grid gap-4">
	<Title>Courses</Title>
	<div class="text-slate-600 dark:text-slate-300">
		<p>I have in the past produced a few courses for Pluralsight. You can find them below:</p>
		<div class="lg:grid lg:grid-cols-2 lg:gap-6">
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
