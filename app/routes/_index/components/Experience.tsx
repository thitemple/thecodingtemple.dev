import kinaxisLogo from "~/assets/images/kinaxis-logo.png";
import shopifyLogo from "~/assets/images/shopify-logo.png";
import smLogo from "~/assets/images/sm-logo.png";
import wyhnLogo from "~/assets/images/wyhn-logo.png";
import { Section } from "./Section";
interface ExperienceItemProps {
	logo: string;
	company: string;
	position: string;
	date: string;
}

function ExperienceItem({
	logo,
	company,
	position,
	date,
}: ExperienceItemProps) {
	return (
		<li className="flex justify-between">
			<img src={logo} className="mr-2 w-11" />
			<div className="flex flex-1 flex-col">
				<span className="font-medium text-slate-600">{company}</span>
				<span className="text-slate-500">{position}</span>
			</div>
			<div className="flex items-end">
				<span className="text-slate-500">{date}</span>
			</div>
		</li>
	);
}

export function Experience() {
	return (
		<Section title="Experience" className="lg:grid lg:grid-cols-2">
			<p className="mt-6 text-slate-600 lg:col-start-1 lg:pr-4">
				I'm a seasoned Staff Software Developer at Shopify, skilled in
				TypeScript, Elm, JavaScript, and React. With a career spanning over two
				decades, I've led impactful projects, pioneered the adoption of
				TypeScript at SurveyMonkey, and developed innovative web and mobile
				applications. I'm a tech-savvy problem solver and a relentless learner.
			</p>
			<ul className="mt-6 flex flex-col items-stretch gap-6 lg:col-start-2">
				<ExperienceItem
					logo={shopifyLogo}
					company="Shopify"
					position="Staff Developer"
					date="2022 - now"
				/>
				<ExperienceItem
					logo={smLogo}
					company="SurveyMonkey"
					position="Senior Engineer"
					date="2019 - 2022"
				/>
				<ExperienceItem
					logo={wyhnLogo}
					company="Wyhn"
					position="Senior Engineer"
					date="2018 - 2018"
				/>
				<ExperienceItem
					logo={kinaxisLogo}
					company="Kinaxis"
					position="Advisory Developer"
					date="2017 - 2018"
				/>
			</ul>
			{/* <Button
				label="Download CV"
				external
				to="https://bit.ly/thiago-temple-resume"
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
          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
					</svg>
				}
			/> */}
		</Section>
	);
}
