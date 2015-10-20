class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :title
      t.integer :availability
      t.integer :quantity
      t.text :description
      t.decimal :price, :precision => 10, :scale => 2
      t.string :saletype
      t.integer :merchant_id
      t.integer :category_id
      t.string :sku
      t.text :keywords
      t.boolean :active
      t.text :image_url50
      t.text :image_url400
      t.text :merchant_url
      t.string :brand
      t.string :color
      t.string :gender
      t.text :images

      t.timestamps null: false
    end
  end
end
