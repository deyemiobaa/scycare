import React from "react"
import Header from "../components/Header"
import { cn } from "../utils"
import { Link } from "react-router-dom"

export default function UploadNewTest(): JSX.Element {
	return (
		<div className={cn("bg-white")}>
			<Header />
			<form className={cn("px-5")}>
				<div className={cn("mb-3 flex items-center justify-between")}>
					<h1 className={cn("text-xl font-bold capitalize text-secondary")}>
						Book new lab test
					</h1>
					<Link
						to="/tracking"
						className={cn("text-sm text-primary underline")}>
						Track your test &gt;
					</Link>
				</div>

				<div
					className={cn(
						"flex flex-wrap justify-between rounded bg-gray-50 p-5 text-gray-one"
					)}>
					<h2
						className={cn(
							"grow basis-full border-b border-gray-one/25 pb-3 text-lg font-bold capitalize text-secondary"
						)}>
						Your Details
					</h2>
					<div className="relative mt-6 grow">
						<input
							type="text"
							name="full name"
							id="fullName"
							placeholder="Full name"
							className={cn(
								"peer w-full rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-one focus:outline-none"
							)}
							autoComplete="off"
						/>
						<label
							htmlFor="fullName"
							className={cn(
								"pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 bg-gray-50 px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:font-medium peer-placeholder-shown:text-gray-two/60 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-one"
							)}>
							Full name
						</label>
					</div>
					<div className="relative mt-6 grow">
						<input
							type="text"
							name="Mobile number"
							id="MobileNumber"
							placeholder="Mobile number"
							className={cn(
								"peer w-full rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-one focus:outline-none"
							)}
						/>
						<label
							htmlFor="MobileNumber"
							className={cn(
								"pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 bg-gray-50 px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:font-medium peer-placeholder-shown:text-gray-two/60 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-one"
							)}>
							Mobile number
						</label>
					</div>
					<div className="relative mt-6 basis-[45%]">
						<input
							type="text"
							name="age"
							id="age"
							placeholder="Age"
							className={cn(
								"peer w-full rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-one focus:outline-none"
							)}
						/>
						<label
							htmlFor="age"
							className={cn(
								"pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 bg-gray-50 px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:font-medium peer-placeholder-shown:text-gray-two/60 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-one"
							)}>
							Age
						</label>
					</div>

					<div className="mt-6 basis-[45%]">
						<select
							className={cn(
								"w-full rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 focus:border-gray-one focus:outline-none"
							)}
							aria-label="Default select example">
							<option
								selected
								disabled>
								Gender
							</option>
							<option value="Male">Male</option>
							<option value="Female">Female</option>
							<option value="Prefer not to say">Prefer not to say</option>
						</select>
					</div>
				</div>
			</form>
		</div>
	)
}
