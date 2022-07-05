class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :password
  has_many :items
end
