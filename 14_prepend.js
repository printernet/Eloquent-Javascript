// http://eloquentjavascript.net/04_data.html#p_iPlgVCeZGh
// prepend a node to a linked list

function prepend(element, list) {
	return { value: element, rest: list }
}