class User < ApplicationRecord
    has_many :items
    has_many :cloths, through: :items
    def get_shopping_items
        self.items.map { |item| item.cloth}
    end
end
