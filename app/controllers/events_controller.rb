class EventsController < ApplicationController

    def index
    events = Event.all
        render json: events, status: :ok
    end

    def show
        selected_event = Event.find(params[:date])
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
    params.permit(:id, :name, :country, :location, :rating, :user_id, :day_id)
end

end
