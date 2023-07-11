export function Title({ children }: { children: React.ReactNode }) {
	return (
		<h1 className="w-full font-heading text-2xl text-slate-700 dark:text-slate-200">
			{children}
		</h1>
	);
}
