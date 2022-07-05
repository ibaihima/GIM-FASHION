class ItemSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :user 
  belongs_to :cloth
end
