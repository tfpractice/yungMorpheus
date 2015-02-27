module ApplicationHelper

  def markdown(source)
    Kramdown::Document.new(source).to_html.html_safe
  end


def kramdown(text)
  return sanitize Kramdown::Document.new(text).to_html
end
end
