class Host < ActiveRecord::Base
  has_and_belongs_to_many :parties
  has_many :rsvps
  has_many :guests, :through => :rsvps
end
