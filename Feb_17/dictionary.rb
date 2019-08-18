words = []
File.open("dictionary.txt") do |f|
  while (line = f.gets)
	  if line.split[0].length >= 3 && line.split[0].length <= 16
	  	words << line.split[0]
	  end

  end
end


File.write('/Users/bsummerfield/Actualize/Dailys/Feb_17/new_file.js', words)