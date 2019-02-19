#The file football.dat contains the results from the English Premier League for 2001/2. The columns labeled ‘F’ and ‘A’ contain the total number of goals scored for and against each team in that season (so Arsenal scored 79 goals against opponents, and had 36 goals scored against them). Write a program to print the name of the team with the smallest difference in ‘for’ and ‘against’ goals.
teams = []
File.open("football.dat") do |f|
  while (line = f.gets)
    ary = line.split
      if ary[2].to_i == 38
        team = [ary[1],(ary[6].to_i-ary[8].to_i)]
        teams << team
       end
      end
  average = teams.sort_by{|a| a[1]}
  average = average.min_by{|x| (0-x[1]).abs}
  p average[0]
end