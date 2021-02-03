class CreateBuilds < ActiveRecord::Migration[6.0]
    def change
        create_table :builds do |t|
            t.string :name 
            t.string :description 
            t.datetime :remember_created_at
            t.timestamps null: false
        end 
    end 
end