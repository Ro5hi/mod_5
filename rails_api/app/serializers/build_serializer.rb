class BuildSerializer
    include FastJsonapi::ObjectSerializer 

    attributes :name :description
    has_many :parts, serializer: PartSerializer

end 