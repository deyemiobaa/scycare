import React from "react"
import {
	createBrowserRouter,
	Route,
	createRoutesFromElements,
} from "react-router-dom"
import Layout from "../components/Layout"
import Index from "../pages/Index"
import PayForRequest from "../pages/PayForRequest"
import TrackLabTest from "../pages/TrackLabTest"
import UploadNewTest from "../pages/UploadNewTest"
import ViewRequestDetails from "../pages/ViewRequestDetails"

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<Layout />}>
			<Route
				index
				element={<Index />}
			/>
			<Route
				path="/tracking"
				element={<TrackLabTest />}
			/>
			<Route
				path="/new-upload"
				element={<UploadNewTest />}
			/>
			<Route
				path="/pay"
				element={<PayForRequest />}
			/>
			<Route
				path="/details"
				element={<ViewRequestDetails />}
			/>
		</Route>
	)
)

export default router
