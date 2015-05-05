module ApplicationHelper
def article_path(article)
  # every article record should have a reference to its parent project
  section_article_path(article.section_id, article)
end

def article_comment_path(article, comment)
  # every article record should have a reference to its parent project
  section_article_comment_path(article.section_id, article, comment)
end

def edit_article_comment_path(article, comment)
  # every article record should have a reference to its parent project
  edit_section_article_comment_path(article.section_id, article, comment)
end
  def markdown(source)
    Kramdown::Document.new(source).to_html.html_safe
  end


def kramdown(text)
  return sanitize Kramdown::Document.new(text, {enable_coderay: true, coderay_css: :class}).to_html
end

def preprocess(content)
	result = ERB.new(content).result
	
end

end
