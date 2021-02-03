class Build < ApplicationRecord 
    
    validates :name, presence: true
    validates :description, presence: true

    has_many :parts

end