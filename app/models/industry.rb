class Industry < ActiveRecord::Base
  has_and_belongs_to_many :industry_lists
end
