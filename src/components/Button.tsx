import React from "react"

export default function Button(props: Props): JSX.Element {
	const { text, onClick, type } = props
	return (
		<button
			type={type}
			onClick={onClick}
			className="text-normal w-full max-w-sm rounded bg-button-default py-4 text-white hover:bg-button-hover active:bg-button-active">
			{text}
		</button>
	)
}

interface Props {
	text: string
	onClick?: () => void
	type: "button" | "submit" | "reset" | undefined
}
