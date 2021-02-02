class PartSerializer
    include FastJsonapi::ObjectSerializer 

    attributes :name :price :component
    
end