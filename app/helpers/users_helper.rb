module UsersHelper
  def gravatar_for(user, options = { :size => 50 })
    email = user.respond_to?(:email) ? user.email : user.email_address
    gravatar_image_tag(email.downcase, :alt => user.name,
                       :class => 'gravatar',
                       :gravatar => options)
  end
end
