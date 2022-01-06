class UsersController < ApplicationController

    def index
        users = User.all
        render json: users, status: :ok
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
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
