class Guest < ActiveRecord::Base
  belongs_to :industry
  has_many :rsvps
  has_many :hosts, :through => :rsvps
  has_many :parties, :through => :rsvps
end
