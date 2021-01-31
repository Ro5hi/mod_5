class API::V1::PartsController < ApplicationController

    def index
        @parts = Part.all 
        render json: PartSerializer.new(@parts), status: :ok
    end 

    def show 
        render json: PartSerializer.new(@part), status: :ok 
    end 

end
