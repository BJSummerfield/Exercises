
def binary_search(number, array)
  middle = (array.length / 2)
  bottom = 0
  top = array.length - 1
  while bottom <= top
    return middle if array[middle] == number
    if array[middle] > number
      top = middle - 1
      middle = top / 2 
    elsif array[middle] < number
      bottom = middle + 1
      middle = ((middle + top) / 2) + 1
    end
  end
  return nil
end

array = (1..10).to_a
binary_search(10,array)

