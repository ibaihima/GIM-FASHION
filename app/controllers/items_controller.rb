class ItemsController < ApplicationController
    def index 
        render json: Item.all 
    end

    def show 
        item = Item.find_by(id: params[:id])
        render json: item, status: :ok
    end

    def destroy
        item = Item.find_by!(user_id: params[:user_id], cloth_id: params[:cloth_id])
        item.destroy
        render json: item, status: :ok
    end 

end
