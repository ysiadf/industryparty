class Party < ActiveRecord::Base

  has_attached_file(:flier, styles: {thumb: "100x100>"},
                    storage: :s3,
                    s3_credentials: File.expand_path(Rails.root.join('config/aws.yml')),
                    bucket: 'IndustryParty')

  def self.active
    Party.find_by_active(true)
  end
end
