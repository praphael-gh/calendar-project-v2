class UsersController < ApplicationController

    def index
        users = User.all
        render json: users, status: :ok
    end

    def show
        selected_user = User.find(params[:id])
        render json: selected_user, status: :ok
    end

    def create
        created_user = User.create(user_params)
        render json: created_user, status: :created
    end

    def destroy
        user = User.find(params[:id])
        destroyed_user = user.destroy
        render json: destroyed_user, status: :not_found
    end

private

def user_params
    params.permit(:id, :name, :username, :password, :password_confirmation)
end

end
