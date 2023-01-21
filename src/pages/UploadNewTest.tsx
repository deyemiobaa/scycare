import React from "react"
import Header from "../components/Header"
import { cn } from "../utils"
import { Link } from "react-router-dom"

export default function UploadNewTest(): JSX.Element {
	return (
		<div className={cn("bg-white")}>
			<Header />
			<div className={cn("px-5")}>
				<div className={cn("flex items-center justify-between")}>
					<h1 className={cn("text-2xl font-bold capitalize text-secondary")}>
						Book new lab test
					</h1>
					<Link
						to="/tracking"
						className={cn("text-sm text-primary underline")}>
						Track your test &gt;
					</Link>
				</div>
			</div>
		</div>
	)
}
