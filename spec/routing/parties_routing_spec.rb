require "spec_helper"

describe PartiesController do
  describe "routing" do

    it "routes to #show" do
      get("/parties/1").should route_to("parties#show", :id => "1")
    end

    it "routes to #active" do
      get("/parties/active").should route_to("parties#active")
    end
  end
end
