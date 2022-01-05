class EventsWithDaySerializer < ActiveModel::Serializer
  attributes :id, :name, :where, :description, :priority
  belongs_to :day
end
