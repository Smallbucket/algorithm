function bubbleSort( arr ) {
	var i, j, n

	if(arr && arr instanceof Array) {
		n = arr.length
		for (i = 0; i <= n - 1; i++) {
			for(j = 0; j <= n - 1 - i; j++) {
				if(arr[j] > arr[j +1])
					swap(arr, j, j +1)
			}
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
	var arr = [ 6, 5, 3, 1, 8, 7, 2, 4 ]

	bubbleSort( arr )

	console.log(arr)
})()
