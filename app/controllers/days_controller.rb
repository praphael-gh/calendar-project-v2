class DaysController < ApplicationController

    def index
        days = Day.all
        render json: days, status: :ok
    end
    
    def show
        selected_day = Day.find(params[:id])
        render json: selected_day, status: :ok
    end
    
    def create
        created_day = Day.create(day_params)
        render json: created_day, status: :created
    end

    private

    def day_params
        params.permit(:id, :date)
    end

end
