class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :name
      t.string :country
      t.string :location
      t.integer :rating
      t.references :day, :user
      
      t.timestamps
    end
  end
end
