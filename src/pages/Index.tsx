import React from "react"
import { useNavigate } from "react-router-dom"
import { cn } from "../utils"
import Button from "../components/Button"

export default function Index(): JSX.Element {
	const navigate = useNavigate()
	return (
		<div className={cn("h-screen bg-home bg-cover bg-center")}>
			<div
				className={cn(
					"flex h-full flex-col items-center justify-center gap-4 bg-primary/[.85] px-5"
				)}>
				<img
					src="/favicon.svg"
					alt="logo"
					className={cn("h-11")}
				/>
				<h1 className={cn("text-center font-hellix text-4xl text-secondary")}>
					Welcome to Scycare
				</h1>
				<p className={cn("mb-5 text-center")}>
					Request, manage, and track your medical tests in simple steps
				</p>
				<Button
					text="Get Started"
					type="button"
					onClick={() => {
						navigate("/upload")
					}}
				/>
			</div>
		</div>
	)
}
