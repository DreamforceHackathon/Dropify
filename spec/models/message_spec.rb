require 'rails_helper'

describe Message do
  context "validations" do
    it { should validate_presence_of :content }
    it { should validate_presence_of :longitude }
    it { should validate_presence_of :latitude }
    it { should ensure_length_of(:content).is_at_most(220) }
  end
end