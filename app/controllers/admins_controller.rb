class AdminsController < ApplicationController
    def show 
        admin = Admin.find_by(id: session[:admin_id])
        if admin 
            render json: admin 
        else 
            render json: {error: "not authorized"}, status: :unauthorized
        end 
    end 
end
