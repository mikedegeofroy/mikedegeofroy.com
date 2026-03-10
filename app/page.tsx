import Link from "next/link";
import { allDocs } from "@/.contentlayer/generated";

const Home = () => {
	const blog = allDocs.filter((x) => x.selected && x.slug.match("blog"));
	const projects = allDocs.filter(
		(x) => x.selected && x.slug.match("projects"),
	);

	return (
		<>
			<span className="mb-5 font-medium">Today</span>
			<p className=" text-foreground-muted dark:text-muted">
				I&apos;m a full-stack developper good at C#, TypeScript and React.
				Currently building {" "}
				<a
					href="https://полечат.рф/"
					target="_blank"
					rel="noopener noreferrer"
					className="text-primary"
				>
					Полечат
				</a>
				, and pursuing a Software Engineering degree at {" "}
				<a
					href="https://itmo.ru"
					target="_blank"
					rel="noopener noreferrer"
					className="text-primary"
				>
					ITMO University
				</a>.
			</p>
			<div className="mt-16">
				<span className="mb-5 block font-medium">Experience</span>
				<div className="flex flex-col gap-4 sm:gap-1">
					<div className="-mx-3 flex flex-col rounded-md px-3 no-underline sm:py-3">
						<h1 className="w-fit">SomaLab</h1>
						<div className="flex justify-between">
							<p className="text-foreground-muted dark:text-muted">
								Middle C# Developer
							</p>
							<p className="text-nowrap text-foreground-muted dark:text-muted">
								fall 2024 {"->"} today
							</p>
						</div>
					</div>
					<div className="-mx-3 flex flex-col rounded-md px-3 no-underline sm:py-3">
						<h1 className="w-fit">Roll to Rule Studio</h1>
						<div className="flex justify-between">
							<p className="text-foreground-muted dark:text-muted">
								Middle Full-Stack Developer / MLOps
							</p>
							<p className="text-nowrap text-foreground-muted dark:text-muted">
								2023 {"->"} 2024
							</p>
						</div>
					</div>
				</div>
			</div>
			{projects.length > 0 && (
				<div className="mt-16">
					<span className="mb-5 block font-medium">Projects</span>
					<div className="flex flex-col gap-7 sm:gap-4">
						{projects.map((x, indx) => {
							return (
								<Link className="no-underline" key={indx} href={x.slug}>
									<div className="-mx-3 flex flex-col rounded-md px-3 no-underline hover:bg-[#F5F4F4] dark:hover:bg-[#191918] sm:py-3">
										<h1 className="cursor-pointer w-fit">{x.title}</h1>
										<p className="text-foreground-muted dark:text-muted">
											{x.description}
										</p>
									</div>
								</Link>
							);
						})}
					</div>
				</div>
			)}
			{blog.length > 0 && (
				<div className="mt-16">
					<span className="mb-5 block font-medium">Blog</span>
					<div className="flex flex-col gap-7 sm:gap-4">
						{blog.map((x, indx) => {
							return (
								<Link className="no-underline" key={indx} href={x.slug}>
									<div className="-mx-3 flex flex-col rounded-md px-3 no-underline hover:bg-[#F5F4F4] dark:hover:bg-[#191918] sm:py-3">
										<h1 className="cursor-pointer w-fit">{x.title}</h1>
										<p className="text-foreground-muted dark:text-muted">
											{x.description}
										</p>
									</div>
								</Link>
							);
						})}
					</div>
				</div>
			)}
		</>
	);
};

export default Home;
