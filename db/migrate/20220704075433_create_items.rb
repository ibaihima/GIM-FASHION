class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.references :user
      t.references :cloth
      t.timestamps
    end
  end
end
