class ClothsController < ApplicationController
    def index
        render json: Cloth.all 
    end

    def sweaters
        cloths = Cloth.all.where(category: 'Sweaters')
        render json: cloths, status: :ok
    end
    def shoes
        cloths = Cloth.all.where(category: 'Shoes')
        render json: cloths, status: :ok
    end
    def pants
        cloths = Cloth.all.where(category: 'Pants')
        render json: cloths, status: :ok
    end


end
