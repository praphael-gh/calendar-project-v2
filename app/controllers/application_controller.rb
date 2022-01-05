class ApplicationController < ActionController::Base
    include ActionController::Cookies
    # skip_before_action :verify_authenticity_token
    skip_before_action :verify_authenticity_token, :only => [:get]
    



end
