class DaysController < ApplicationController

    def index
        days = Day.all
            render json: days, status: :ok
        end
    
    def show
        selected_day = find_day
        render json: selected_day, serializer: DayWithEventsSerializer, status: :ok
    end

    def create
        created_day = Day.create(day_params)
        render json: created_day, status: :created
    end

    private

    def day_params
        params.permit(:id, :date)
    end

    def find_day
        Day.find(params[:id])
    end

end
