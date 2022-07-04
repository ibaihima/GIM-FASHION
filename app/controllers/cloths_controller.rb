class ClothsController < ApplicationController
    def index
        render json: Cloths.all 
    end

    def sweaters
        cloths = Cloth.all.where(category: 'Sweaters')
        render json: cloths
    end



end
