class CreateCloths < ActiveRecord::Migration[6.1]
  def change
    create_table :cloths do |t|
      t.string :category
      t.string :name
      t.integer :price
      t.string :image1
      t.string :image2
      t.string :color
      t.string :brand
      t.timestamps
    end
  end
end
