require 'spec_helper'

describe Party do
  before(:each) do
    @active_party = Factory.create(:active_party)
  end

  it "can return the active party" do
    Party.active.should eq(@active_party)
  end
end
