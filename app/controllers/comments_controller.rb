class CommentsController < ApplicationController
  
  def create
    @comment = Comment.new params_comment
    if comment.save
      redirect_to "/"
    else
      redirect_to "/", notice: "Create comment fail"
    end
  end

  private
  
  def params_comment
    params.permit(comment: [:name, :email, :subject, :message])
  end
  
end
