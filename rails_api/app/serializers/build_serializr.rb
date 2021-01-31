class BuildSerializer
    include FastJsonapi::ObjectSerializer 

    attributes :name :description :parts 

end 