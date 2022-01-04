class DaysController < ApplicationController

    def index
        days = Day.all
        render json: days, status: :ok
    end
    

    def show

        selected_day = find_day

        if selected_day
                render json: selected_day, serializer: DayWithEventsSerializer, status: :ok
        else
            created_day = Day.create(date: params[:date])
            render json: created_day, status: :created
        end
    end

    private

    def day_params
        params.permit(:id, :date)
    end

    def find_day
        Day.find_by(date: params[:date])
    end

end
