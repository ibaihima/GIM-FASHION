class UsersController < ApplicationController
    def index 
        render json: User.all
    end

    def show
        user = User.find_by(id: params[:id])
        items = user.get_shopping_items
        render json: items, status: :ok
    end

    def create
        user = Item.create(user_params)
        if user
            render json: user, status: :created
        else
            render json: {error: "not created"}, status: :unauthorized
        end
    end


    def destroy 
        item = Item.find_by!(id: params[:user_id])
        item.destroy
        head :no_content
    end 

    
    private

    def user_params
        params.permit(:user_id, :cloth_id)
    end

end
