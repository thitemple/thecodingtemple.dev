import { Button } from "~/components/Button";
import { Section } from "./Section";

export function NewsletterSubscription() {
	return (
		<Section title="News From the Temple">
			<p className="mt-6 text-slate-600">
				Stay up to date with the latest news from the Temple. From what I'm up
				to, to what I am following. Unsubscribe at any time.
			</p>
			<form
				action="https://thiagotemple.us1.list-manage.com/subscribe/post?u=8b9b0b0c9b9b0b0c9b9b0b0c9&amp;id=8b9b0b0c9b"
				method="post"
				id="mc-embedded-subscribe-form"
				name="mc-embedded-subscribe-form"
				className="mt-6"
				target="_blank"
				noValidate
			>
				<div className="flex flex-col sm:flex-row">
					<input
						type="email"
						name="EMAIL"
						className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 sm:max-w-xs sm:rounded-l-md sm:rounded-r-none"
						placeholder="E-mail"
						required
					/>
					<Button
						label="Sign up"
						icon={
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="ml-3 h-auto w-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
								/>
							</svg>
						}
					/>
				</div>
			</form>
		</Section>
	);
}
