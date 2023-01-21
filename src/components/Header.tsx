import React from "react"
import { cn } from "../utils"

export default function Header(): JSX.Element {
	return (
		<header
			className={cn(
				"flex h-36 flex-col items-center justify-center bg-header bg-left-top bg-no-repeat"
			)}>
			<img
				src="/assets/images/logo.png"
				alt="logo"
			/>
		</header>
	)
}
