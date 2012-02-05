# Read about factories at http://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :party do
    name "MyString"
    info "MyText"
    start DateTime.current - 2.days

    factory :active_party do
      active true
    end

    factory :inactive_party do
      active false
    end
  end
end
