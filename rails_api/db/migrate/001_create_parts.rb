class CreateParts < ActiveRecord::Migration[6.0]
    def change
        create_table :parts do |t|
            t.string :name
            t.string :component 
            t.integer :price
        end
    end 
end 