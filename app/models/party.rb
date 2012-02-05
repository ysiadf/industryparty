class Party < ActiveRecord::Base
  def self.active
    Party.find_by_active(true)
  end
end
