import { Link } from "@remix-run/react";
import classnames from "classnames";
import { ReactNode } from "react";

interface ButtonProps {
	label: string;
	icon?: ReactNode;
	to?: string;
	external?: boolean;
	// variant: "primary" | "outline";
	onClick?: () => void;
}

export function Button({ label, icon, to, external, onClick }: ButtonProps) {
	const classes = classnames(
		"mt-6 flex justify-center rounded-lg border-2 border-fuchsia-500 bg-white py-2 uppercase text-fuchsia-500",
	);

	if (to && external) {
		return (
			<a href={to} className={classes}>
				{label}
				{icon}
			</a>
		);
	}

	if (to) {
		return (
			<Link to={to} className={classes}>
				{label}
				{icon}
			</Link>
		);
	}

	return (
		<button className={classes} onClick={onClick}>
			{label}
			{icon}
		</button>
	);
}
