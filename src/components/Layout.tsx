import React from "react"
import { cn } from "../utils"
import { Outlet } from "react-router-dom"

export default function Layout(): JSX.Element {
	return (
		<main className={cn("min-h-screen w-full bg-accent-two")}>
			<div className={cn("mx-auto h-full w-full max-w-md")}>
				<Outlet />
			</div>
		</main>
	)
}
