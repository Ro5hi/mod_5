class PartSerializer
    include FastJsonapi::ObjectSerializer 

    attributes :name :price :component
    belongs_to :build
end