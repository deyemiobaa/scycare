import React from "react"
import { FiAlertTriangle } from "react-icons/fi"

interface Props {
	confirmDelete: () => void
	cancelDelete: () => void
}

export default function DeleteModal(props: Props): JSX.Element {
	const { confirmDelete, cancelDelete } = props
	return (
		<div className="fixed inset-0 flex h-screen w-full items-center justify-center bg-black/70">
			<div className="w-11/12 max-w-xs rounded-md bg-white px-4 py-5">
				<div className="flex gap-2 font-medium text-gray-two">
					<FiAlertTriangle />
					<span className="text-xs">
						Are you sure you want to delete the test?
					</span>
				</div>

				<div className="mt-4 flex justify-end gap-2">
					<button
						type="button"
						className="rounded-md bg-button-default px-4 py-2 text-xs text-white"
						onClick={() => {
							confirmDelete()
						}}>
						Delete
					</button>

					<button
						type="button"
						className="rounded-md border border-secondary px-4 py-2 text-xs text-secondary"
						onClick={() => {
							cancelDelete()
						}}>
						Cancel
					</button>
				</div>
			</div>
		</div>
	)
}
