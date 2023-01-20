import React from "react"
import { cn } from "./utils"

export default function App(): JSX.Element {
	return (
		<main className={cn("bg-accent-two w-full min-h-screen")}>
			<div className={cn("mx-auto w-full max-w-md")}></div>
		</main>
	)
}
