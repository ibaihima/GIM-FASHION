class ClothSerializer < ActiveModel::Serializer
  attributes :id, :category, :name, :price, :image1, :image2, :color, :brand
  has_many :items
end
