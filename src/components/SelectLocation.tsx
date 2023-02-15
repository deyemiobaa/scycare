import React, { useRef, useEffect, useState } from "react"
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder"
import mapboxgl from "mapbox-gl"
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css"

export default function SelectLocation(): JSX.Element {
	mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_APIKEY as string

	const mapContainer = useRef<HTMLDivElement>(null)
	const map = useRef<mapboxgl.Map | null>(null)

	const [lng, setLng] = useState(-0.205874)
	const [lat, setLat] = useState(5.614818)
	const [zoom, setZoom] = useState(9)

	useEffect(() => {
		if (map.current != null) return // initialize map only once
		map.current = new mapboxgl.Map({
			container: mapContainer.current as HTMLElement,
			style: "mapbox://styles/mapbox/streets-v12",
			center: [lng, lat],
			zoom,
		})

		map.current.addControl(
			new MapboxGeocoder({
				accessToken: mapboxgl.accessToken,
				mapboxgl,
			})
		)
	})

	useEffect(() => {
		if (map.current == null) return // wait for map to initialize

		map.current.on("move", () => {
			setLng(Number(map.current?.getCenter().lng.toFixed(4)))
			setLat(Number(map.current?.getCenter().lat.toFixed(4)))
			setZoom(Number(map.current?.getZoom().toFixed(2)))
		})
	})

	return <div ref={mapContainer} />
}
