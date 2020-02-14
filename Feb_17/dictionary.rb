words = []
File.open("Accounts.PDF") do |f|
  while (line = f.gets)
	  p line[0]

  end
end


# File.write('/Users/bsummerfield/Actualize/Dailys/Feb_17/new_file.js', words)