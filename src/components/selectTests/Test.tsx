import React from "react"
import { BiMoney } from "react-icons/bi"
import { BsPlus } from "react-icons/bs"

interface Props {
	price: number
	name: string
	info?: string
	icon?: string
	hasMultipleTests?: boolean
}

export default function Test(props: Props): JSX.Element {
	const { price, name, info, icon, hasMultipleTests } = props
	return (
		<div className="rounded-md bg-white px-2 pt-2.5 text-[12px] leading-[22.5px] text-gray-two shadow-min">
			<div className="flex items-start gap-3">
				<h5 className="font-semibold">{name}</h5>
				<span className="flex items-center gap-1.5">
					<BiMoney className="text-lg text-secondary" />
					<span className="font-medium capitalize opacity-60">{`GHS ${price}`}</span>
				</span>
				<button
					type="button"
					className="ml-auto flex items-center gap-1 rounded-md border border-secondary py-1.5 px-[7px] text-[10px] font-semibold leading-[8px] text-secondary">
					<BsPlus className="text-sm" />
					<span>Add</span>
				</button>
			</div>

			<div
				className={`mt-2 flex items-start gap-2 ${
					icon !== undefined ? "mb-2.5" : ""
				}`}>
				{icon !== undefined ? (
					<img
						src={icon}
						alt="icon"
						aria-hidden
						className="mt-0.5"
					/>
				) : null}
				<div>
					<p className="font-medium leading-[18px] opacity-60">{info}</p>
					{hasMultipleTests === true ? (
						<button
							type="button"
							className="mt-1 text-[10px] text-secondary underline">
							View all test
						</button>
					) : null}
				</div>
			</div>
		</div>
	)
}
