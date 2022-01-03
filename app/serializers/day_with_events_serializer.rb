class DayWithEventsSerializer < ActiveModel::Serializer
    attributes :id, :date
    has_many :events
end