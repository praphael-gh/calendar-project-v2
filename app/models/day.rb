class Day < ApplicationRecord
    has_many :events
    has_many :users, through: :events
    validates :date, presence: true, uniqueness: true
end
