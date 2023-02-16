import React from "react"
import { BsArrowDownShort } from "react-icons/bs"
import { VscTrash } from "react-icons/vsc"

interface Props {
	fileName: string | undefined
	fileSize: string | undefined
	date: string
	handleClick: (values: boolean) => void
}

export default function SelectedFile(props: Props): JSX.Element {
	const { fileName, fileSize, date, handleClick } = props
	return (
		<div className="mb-6">
			<div className="my-4 flex items-center gap-2">
				<label
					htmlFor="requestForm"
					className="text-xs font-semibold text-gray-600">
					Uploaded Lab Request
				</label>
				<BsArrowDownShort />
			</div>
			<div className="flex w-full items-center gap-3 rounded bg-white/80 p-4 shadow-min">
				<img
					src="/assets/icons/file_upload.png"
					alt="upload file"
					className="grayscale"
				/>
				<div>
					<p className="mb-1 text-xs">{fileName}</p>
					<p className="flex gap-3 text-xs">
						<span>{date}</span>
						<span>{fileSize}</span>
					</p>
				</div>
				<button
					type="button"
					className="ml-auto"
					title="remove file"
					onClick={() => {
						handleClick(true)
					}}>
					<VscTrash />
				</button>
			</div>
		</div>
	)
}
