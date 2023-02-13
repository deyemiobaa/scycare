const formatFileSize = (size?: number): string => {
	if (size === undefined) {
		return "Unknown"
	}
	if (size < 1024) {
		return `${size}bytes`
	}
	size /= 1024
	if (size < 1024) {
		return size.toFixed(2) + "KB"
	}
	size /= 1024
	if (size < 1024) {
		return size.toFixed(2) + "MB"
	}
	size /= 1024
	return size.toFixed(2) + "GB"
}

export default formatFileSize
