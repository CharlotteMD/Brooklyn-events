class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.text :areasCovered
      t.text :directions
      t.string :name
      t.text :transportStation
      t.datetime :longDate
      t.string :day
      t.string :start
      t.string :end
      t.string :city
      t.text :address
      t.string :geoloc
      t.string :zip

      t.timestamps
    end
  end
end
