require 'spec_helper'

describe "parties/edit" do
  before(:each) do
    @party = assign(:party, stub_model(Party,
      :name => "MyString",
      :info => "MyText",
      :references => "",
      :references => ""
    ))
  end

  it "renders the edit party form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form", :action => parties_path(@party), :method => "post" do
      assert_select "input#party_name", :name => "party[name]"
      assert_select "textarea#party_info", :name => "party[info]"
      #assert_select "input#party_references", :name => "party[references]"
      #assert_select "input#party_references", :name => "party[references]"
    end
  end
end
