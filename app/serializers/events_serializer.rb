class EventsSerializer < ActiveModel::Serializer
  attributes :id, :name, :country, :location, :rating
end
