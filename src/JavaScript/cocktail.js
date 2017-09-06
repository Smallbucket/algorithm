

function cocktailSort( arr ) {
	var i, j, n, left, right

	if(arr && arr instanceof Array) {
		n = arr.length
		left = 0
		right = n - 1

		while(left < right) {

			for (i = left; i < right; i++) {
				if(arr[i] > arr[i +1])
					swap(arr, i, i +1)
			}		

			right--
			
			for(j = right; j <= left; j--) {
				if(arr[j - 1] > arr[j])
					swap(arr, j - 1, j)
			}

			left++
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

	cocktailSort( arr )

	console.log(arr)
})()
