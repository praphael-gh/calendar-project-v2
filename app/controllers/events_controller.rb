class EventsController < ApplicationController

    def index
        events = Event.all
        render json: events, each_serializer: EventsWithDaySerializer, status: :ok
    end

    def show
        selected_event = Event.find(params[:id])
        render json: selected_event, status: :ok
    end

    def create
        created_event = Event.create(event_params)
        render json: created_event, status: :created
    end

    def destroy
        event = Event.find(params[:id])
        destroyed_event = event.destroy
        render json: destroyed_event, status: :no_content
    end

    def update
        event = Event.find(params[:id])
        updated_event = event.update(event_params)
        render json: event, status: :accepted
    end

private

def event_params
    params.permit(:name, :where, :description, :priority, :day_id, :user_id)
end

end
