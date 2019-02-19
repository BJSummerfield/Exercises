#In weather.dat you’ll find daily weather data for Morristown, NJ for June 2002. Download this text file, then write a program to output the day number (column one) with the smallest temperature spread (the maximum temperature is the second column, the minimum the third column).
lowest = []
File.open("weather.dat") do |f|
  while (line = f.gets)
    ary = line.split
    spread = [(ary[1].to_i - ary[2].to_i),ary[0].to_i ]
    lowest << spread
    end
low = lowest.sort 
p low[2][1]
end
  
