class IndustryList < ActiveRecord::Base
  has_and_belongs_to_many :industries
  has_many :parties
end
