class UsersController < ApplicationController
    def index 
        render json: User.all
    end

    def show
        user = User.find_by(id: params[:id])
        items = user.get_shopping_items
        render json: items, status: :ok
    end
end
