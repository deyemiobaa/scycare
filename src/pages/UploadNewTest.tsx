import React from "react"
import Header from "../components/Header"
import { Link } from "react-router-dom"
import { AiOutlineCamera } from "react-icons/ai"

export default function UploadNewTest(): JSX.Element {
	return (
		<div className="bg-white">
			<Header />
			<form
				noValidate
				className="px-5">
				<div className="mb-5 flex items-center justify-between">
					<h1 className="text-xl font-bold capitalize text-secondary">
						Book new lab test
					</h1>
					<Link
						to="/tracking"
						className="text-sm text-primary underline">
						Track your test &gt;
					</Link>
				</div>
				<div className="flex flex-wrap justify-between rounded bg-gray-50 p-5 text-gray-one">
					<h2 className="grow basis-full border-b border-gray-one/25 pb-3 text-lg font-bold capitalize text-secondary">
						Your Details
					</h2>
					<div className="relative mt-6 grow">
						<input
							type="text"
							name="full name"
							id="fullName"
							placeholder="Full name"
							className="peer w-full rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-one focus:outline-none valid:[&:not(:placeholder-shown)]:border-green-500 [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400"
							autoComplete="off"
							required
							pattern="^[a-zA-Z ]+$"
						/>
						<label
							htmlFor="fullName"
							className="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 bg-gray-50 px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:font-medium peer-placeholder-shown:text-gray-two/60 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-one">
							Full name
						</label>
						<span className="mt-2 hidden text-sm text-red-400">
							Please enter your full name.
						</span>
					</div>
					<div className="relative mt-6 grow">
						<input
							type="tel"
							name="Mobile number"
							id="MobileNumber"
							placeholder="Mobile number"
							className="peer w-full rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-one focus:outline-none valid:[&:not(:placeholder-shown)]:border-green-500 [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400"
							required
							pattern="^[0-9]{11}$"
						/>
						<label
							htmlFor="MobileNumber"
							className="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 bg-gray-50 px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:font-medium peer-placeholder-shown:text-gray-two/60 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-one">
							Mobile number
						</label>
						<span className="mt-2 hidden text-sm text-red-400">
							Please enter a valid phone number.
						</span>
					</div>
					<div className="relative mt-6 basis-[45%]">
						<input
							type="number"
							name="age"
							id="age"
							placeholder="Age"
							className="peer w-full rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-one focus:outline-none valid:[&:not(:placeholder-shown)]:border-green-500 [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400"
						/>
						<label
							htmlFor="age"
							className="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 bg-gray-50 px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:font-medium peer-placeholder-shown:text-gray-two/60 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-one">
							Age
						</label>
						<span className="mt-2 hidden text-sm text-red-400">
							Please enter your age.
						</span>
					</div>

					<div className="mt-6 basis-[45%]">
						<select
							className="w-full rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 focus:border-gray-one focus:outline-none valid:[&:not(:placeholder-shown)]:border-green-500 [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400"
							defaultValue="Gender"
							aria-label="Default select example"
							required>
							<option
								value="Gender"
								disabled>
								Gender
							</option>
							<option value="Male">Male</option>
							<option value="Female">Female</option>
							<option value="Prefer not to say">Prefer not to say</option>
						</select>
						<span className="mt-2 hidden text-sm text-red-400">
							Please select a gender.
						</span>
					</div>
				</div>

				<div className="mt-10 flex flex-wrap justify-between rounded bg-gray-50 p-5 text-gray-one">
					<h2 className="grow basis-full border-b border-gray-one/25 pb-3 text-lg font-bold capitalize text-secondary">
						Your Test Details
					</h2>
					<div className="mb-6">
						<div className="my-4 flex items-center gap-3">
							<AiOutlineCamera />
							<label
								htmlFor="form"
								className="text-sm text-gray-600">
								Upload your lab request form
							</label>
						</div>
						<div className="flex flex-col items-center gap-3 rounded-md border-2 border-dashed border-gray-three p-4">
							<img
								src="/assets/icons/file_upload.png"
								alt="upload file"
							/>
							<p className="text-xs font-semibold text-secondary">
								Click here to upload your lab request form
							</p>
							<p className="text-xs">PNG, JPG, or PDF</p>
						</div>
						{/* <input
							type="file"
							name="Upload Form"
							id="form"
						/> */}
						<span className="mt-2 hidden text-sm text-red-400">
							Please upload an image or pdf file of lab tests
						</span>
					</div>
				</div>
			</form>
		</div>
	)
}
