import React, { useState, useEffect } from "react"
import Test from "./selectTests/Test"
import { TfiAngleLeft } from "react-icons/tfi"
import testData from "../data/tests.json"
import { formatTestDescription, chooseTestIcon } from "../lib/TestData"

interface TestData {
	name: string
	price: number
	description: string
	requiredTests: string[]
}
export default function SelectLabTests(): JSX.Element {
	const [tests, setTests] = useState<TestData[]>([])

	useEffect(() => {
		setTests(testData)
		console.log(testData)
	}, [])
	return (
		<div className="fixed inset-0 mx-auto max-w-md overflow-y-auto bg-white px-5 py-8">
			<button
				type="button"
				className="flex items-center gap-3 text-primary">
				<TfiAngleLeft />
				<span className="text-base font-semibold">Select your lab tests</span>
			</button>
			<div className="my-[22px]">
				<label
					htmlFor="search-tests"
					className="sr-only">
					Search
				</label>
				<div className="relative flex rounded shadow-sm">
					<input
						type="text"
						id="search-tests"
						name="search-tests"
						placeholder="Search lab tests..."
						className="block w-full appearance-none rounded border border-gray-300 bg-inherit py-3 px-3.5 pl-11 text-sm text-gray-two outline-none placeholder:text-sm focus:z-10 focus:ring-0"
					/>
					<div className="pointer-events-none absolute inset-y-0 left-0 z-20 flex items-center pl-4">
						<svg
							className="h-4 w-4 text-gray-400"
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							viewBox="0 0 16 16">
							<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
						</svg>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-4">
				{tests.map((test) => (
					<Test
						key={test.name}
						name={test.name}
						price={test.price}
						icon={chooseTestIcon(test.name)}
						info={
							test.description.length > 1
								? test.description
								: formatTestDescription(test.requiredTests)
						}
						hasMultipleTests={test.requiredTests.length > 0}
					/>
				))}
			</div>
		</div>
	)
}
