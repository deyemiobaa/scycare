import React from "react"
import { Outlet } from "react-router-dom"

export default function Layout(): JSX.Element {
	return (
		<main className="min-h-screen w-full bg-accent-two">
			<div className="relative mx-auto h-full w-full max-w-md">
				<Outlet />
			</div>
		</main>
	)
}
