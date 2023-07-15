import { Link } from "@remix-run/react";
import classnames from "classnames";
import { ReactNode } from "react";

interface ButtonProps {
	children: string;
	prefix?: ReactNode;
	suffix?: ReactNode;
	to?: string;
	external?: boolean;
	variant?: "primary" | "secondary" | "ghost";
	onClick?: () => void;
	disabled?: boolean;
}

export function Button({
	children,
	prefix,
	suffix,
	to,
	external,
	disabled,
	variant = "secondary",
	onClick,
}: ButtonProps) {
	const classes = classnames(
		"flex justify-center rounded-lg border-2 border-fuchsia-500 bg-white py-2 uppercase text-fuchsia-500 dark:bg-violet-700 dark:border-fuchsia-500 dark:text-slate-200 cursor-pointer shadow-md dark:hover:bg-violet-500",
		{
			"border-0 p-0 bg-transparent dark:border-0 shadow-none inline dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent hover:underline inline-flex":
				variant === "ghost",
			"opacity-50 cursor-not-allowed": disabled,
		},
	);

	function ButtonWrapper({ children }: { children: ReactNode }) {
		if (to && external) {
			return (
				<a
					href={disabled ? "" : to}
					className={classes}
					aria-disabled={disabled}
				>
					{children}
				</a>
			);
		}

		if (to) {
			return (
				<Link
					to={disabled ? "" : to}
					className={classes}
					aria-disabled={disabled}
				>
					{children}
				</Link>
			);
		}

		return (
			<button className={classes} onClick={onClick} disabled={disabled}>
				{children}
			</button>
		);
	}

	return (
		<ButtonWrapper>
			{prefix && <span className="mr-3 h-auto w-6">{prefix}</span>}
			{children}
			{suffix && <span className="ml-3 h-auto w-6">{suffix}</span>}
		</ButtonWrapper>
	);
}
