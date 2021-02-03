class Part < ApplicationRecord 

    belongs_to :build 
    
    validates :name, presence: true
    validates :component, presence: true
    validates :price, presence: true

end 