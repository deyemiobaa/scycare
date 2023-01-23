import React from "react"
import router from "./routes/routes"
import { RouterProvider } from "react-router-dom"

export default function App(): JSX.Element {
	return <RouterProvider router={router} />
}
