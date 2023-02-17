function formatTestDescription(tests: string[]): string | undefined {
	if (tests.length === 0) {
		return undefined
	}
	const numTests = tests.length
	const firstTests = tests.slice(0, 2).join(" , ")
	const numOtherTests = numTests - 2
	const otherTestsStr =
		numOtherTests > 0
			? `and ${numOtherTests} other test${numOtherTests > 1 ? "s" : ""}`
			: ""

	return `${numTests} tests: ${firstTests} ${otherTestsStr}`
}

function chooseTestIcon(name: string): string | undefined {
	if (name.includes("Vitamin")) {
		return undefined
	} else if (name.includes("Fasting")) {
		return "/assets/icons/fasting.png"
	} else {
		return "/assets/icons/test_tube.png"
	}
}

export { formatTestDescription, chooseTestIcon }
