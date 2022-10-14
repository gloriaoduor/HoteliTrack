class SessionsController < ApplicationController
    # login method
    def create 
        admin = Admin.find_by(email: params[:email])
        if admin
            session[:user_id] = admin.id
            render json: admin
        else 
            render json: {error: "not found"}
        end 
    end 
    # logout method
    def destroy 
        session.delete :user_id
        head :no_content
    end 

end
