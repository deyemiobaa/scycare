import React from "react"

export default function Button(props: Props): JSX.Element {
	const { text, onClick, type } = props
	return (
		<button
			type={type}
			onClick={onClick}
			className="text-normal w-full rounded bg-button-default py-4 text-white hover:bg-button-hover active:bg-button-active group-invalid:pointer-events-none group-invalid:bg-button-default/40">
			{text}
		</button>
	)
}

interface Props {
	text: string
	onClick?: () => void
	type: "button" | "submit" | "reset" | undefined
}
