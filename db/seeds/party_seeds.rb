default_party_name = "15 Minutes of Fame"
Party.find_by_name(default_party_name) || Party.create!(
    name: default_party_name,
    info: "You can come to this party when it starts. blah blah",
    start: DateTime.now - 2.days,
    active: true,
    flier: File.open(Rails.root.join('app','assets', 'images', 'fifteenmin.png'))
)