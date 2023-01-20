import React from "react"
import { cn } from "./utils"
import router from "./routes/routes"
import { RouterProvider } from "react-router-dom"

export default function App(): JSX.Element {
	return (
		<main className={cn("min-h-screen w-full bg-accent-two")}>
			<div className={cn("mx-auto h-full w-full max-w-md")}>
				<RouterProvider router={router} />
			</div>
		</main>
	)
}
