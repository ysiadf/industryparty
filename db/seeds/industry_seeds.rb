%w{fashion developer broker}.each do |i|
  Industry.find_or_create_by_name(name: i)
end