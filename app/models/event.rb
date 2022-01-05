class Event < ApplicationRecord
    belongs_to :user
    belongs_to :day

    validates :name, presence: true, uniqueness: true
end
