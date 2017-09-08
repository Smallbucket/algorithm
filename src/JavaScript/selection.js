
function selectionSort( arr ) {
	var i, j, n, min, right

	if(arr && arr instanceof Array) {
		n = arr.length
		for (i = 0; i < n - 1; i++) {
			min = i
			for (j = i +1; j < n; j++) {
				if(arr[j] < arr[min])
					min = j
			}

			if(min != i)
				swap(arr, min, i)
		}
	}
}

function swap(arr, i, j) {
	var temp

	temp = arr[i]
	arr[i] = arr[j]
	arr[j] = temp
}

(function() {
	var arr = [ 6, 5, 3, 1, 12, 10, 8, 7, 2, 4 ]

	selectionSort( arr )

	console.log(arr)
})()
