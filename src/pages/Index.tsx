import React from "react"
import { cn } from "../utils"
import Button from "../components/Button"

export default function Index(): JSX.Element {
	return (
		<div className={cn("h-screen bg-home bg-cover bg-center")}>
			<div
				className={cn(
					"flex h-full flex-col items-center justify-center gap-4 bg-primary/[.85] px-5"
				)}>
				<h1 className={cn("text-center font-hellix text-4xl text-secondary")}>
					Welcome to Scycare
				</h1>
				<p className={cn("mb-5 text-center")}>
					Request, manage, and track your medical tests in simple steps
				</p>
				<Button
					text="Get Started"
					type="button"
				/>
			</div>
		</div>
	)
}
