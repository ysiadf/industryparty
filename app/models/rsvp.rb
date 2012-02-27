class Rsvp < ActiveRecord::Base
  belongs_to :guest
  belongs_to :host
  belongs_to :party

  validates :num_guests, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
end