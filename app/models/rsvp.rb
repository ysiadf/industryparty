class Rsvp < ActiveRecord::Base
  belongs_to :guest
  belongs_to :host
  belongs_to :party
end
